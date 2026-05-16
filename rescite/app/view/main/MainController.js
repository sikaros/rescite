Ext.define('RESCITE.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: ['RESCITE.data.Resume'],

    init: function () {
        var vm = this.getViewModel(),
            r  = RESCITE.data.Resume,
            me = this;

        vm.set({
            hero:           r.hero,
            about:          r.about,
            stats:          r.stats,
            experience:     r.experience,
            skills:         r.skills,
            projects:       r.projects,
            education:      r.education,
            certifications: r.certifications,
            languages:      r.languages,
            goals:          r.goals,
            hobbies:        r.hobbies,
            contact:        r.contact,
            loaded:         true
        });

        if (window.matchMedia) {
            this._mql = window.matchMedia('(prefers-color-scheme: dark)');
            this._mqlHandler = function () { me.refreshToggleIcon(); };
            if (this._mql.addEventListener) {
                this._mql.addEventListener('change', this._mqlHandler);
            }
        }
        Ext.defer(function () {
            me.refreshToggleIcon();
            me.labelInnerButtons();
            me.setupScrollEffects();
        }, 250);
    },

    destroy: function () {
        if (this._mql && this._mql.removeEventListener) {
            this._mql.removeEventListener('change', this._mqlHandler);
        }
        if (this._revealObserver) this._revealObserver.disconnect();
        if (this._navObserver) this._navObserver.disconnect();
        if (this._scroller && this._scrollHandler) {
            this._scroller.removeEventListener('scroll', this._scrollHandler);
        }
        this.callParent();
    },

    onToggleTheme: function () {
        var me = this,
            current = RESCITE.Globals.resolvedTheme();
        RESCITE.Globals.setStoredTheme(current === 'dark' ? 'light' : 'dark');
        this.refreshToggleIcon();

        // Brief rotation animation on click
        var btn = this.lookup('themeToggle');
        if (btn && btn.element) {
            btn.element.dom.classList.add('rs-toggling');
            setTimeout(function () {
                if (btn.element && btn.element.dom) {
                    btn.element.dom.classList.remove('rs-toggling');
                }
            }, 320);
        }
    },

    refreshToggleIcon: function () {
        var btn = this.lookup('themeToggle');
        if (!btn) return;
        var isDark = RESCITE.Globals.resolvedTheme() === 'dark';
        btn.setIconCls('x-fa fa-moon-o');
        btn.setTooltip(isDark ? 'Switch to light mode' : 'Switch to dark mode');
    },

    onBrandClick: function () {
        var scroll = this.getView().el && this.getView().el.dom.querySelector('.rs-scroll .x-scroller');
        if (scroll && scroll.scrollTo) {
            scroll.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (scroll) {
            scroll.scrollTop = 0;
        }
    },

    onScrollTo: function (btn) {
        var target = btn.getData && btn.getData().target;
        if (!target) return;
        var el = document.getElementById('rs-section-' + target);
        if (el && el.scrollIntoView) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    // Animate a stat value element from 0 → its data-target number.
    // Preserves any non-numeric suffix like "+" so "30+" counts up to 30 then re-appends "+".
    animateCounter: function (el) {
        var raw = el.getAttribute('data-target') || el.textContent || '';
        var match = raw.match(/(\d+)/);
        if (!match) return;
        var endValue = parseInt(match[1], 10);
        var suffix = raw.replace(/^\d+/, ''); // e.g. "+" in "30+"

        var duration = 900;
        var startTs = null;
        function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

        function step(ts) {
            if (!startTs) startTs = ts;
            var progress = Math.min((ts - startTs) / duration, 1);
            var current = Math.round(easeOut(progress) * endValue);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = raw; // ensure exact final string
        }
        requestAnimationFrame(step);
    },

    // Tag children of revealed sections with --rs-stagger so each fades in
    // with a small delay relative to its siblings.
    tagStaggerChildren: function (section) {
        var selectors = [
            '.rs-job', '.rs-skill-group', '.rs-project-card',
            '.rs-cert', '.rs-edu', '.rs-hobby', '.rs-stat',
            '.rs-job-bullets li'
        ];
        selectors.forEach(function (sel) {
            var items = section.querySelectorAll(sel);
            items.forEach(function (item, i) {
                item.style.setProperty('--rs-stagger', i);
                item.classList.add('rs-stagger-item');
            });
        });
    },

    // Ext modern renders a hidden inner <button> for keyboard focus. It does
    // not inherit an accessible name from the outer component, which Lighthouse
    // flags. Copy the outer component's ariaLabel or visible text down.
    labelInnerButtons: function () {
        document.querySelectorAll('button.x-button-el').forEach(function (el) {
            if (el.getAttribute('aria-label')) return;
            var outer = el.closest('.x-button');
            if (!outer) return;
            var label = outer.getAttribute('aria-label');
            if (!label) {
                var textEl = outer.querySelector('.x-text-el');
                label = textEl && textEl.textContent.trim();
            }
            if (!label && outer.classList.contains('rs-themetoggle')) {
                label = 'Toggle light/dark theme';
            }
            if (label) el.setAttribute('aria-label', label);
        });
    },

    // ----- Scroll effects: reveal-on-scroll, active nav, progress bar -----
    setupScrollEffects: function () {
        var me = this,
            view = this.getView(),
            root = view.el && view.el.dom,
            scroller = root && root.querySelector('.rs-scroll .x-scroller'),
            sections = root && root.querySelectorAll('.rs-section'),
            progressFill = root && root.querySelector('.rs-progress-fill'),
            navButtons = root && root.querySelectorAll('.rs-navlink');

        if (!scroller || !sections.length) return;
        this._scroller = scroller;

        var reduceMotion = window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // 1) Reveal sections as they enter the viewport, with staggered children.
        if (!reduceMotion && 'IntersectionObserver' in window) {
            this._revealObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('rs-revealed');

                        // Animate any stat counters inside this section.
                        var stats = entry.target.querySelectorAll('.rs-stat-value[data-target]');
                        stats.forEach(function (el) { me.animateCounter(el); });

                        me._revealObserver.unobserve(entry.target);
                    }
                });
            }, { root: scroller, threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

            sections.forEach(function (section) {
                section.classList.add('rs-reveal');
                // Tag staggerable children so CSS can delay their fade-in.
                me.tagStaggerChildren(section);
                me._revealObserver.observe(section);
            });
        } else {
            // reduced motion or no IntersectionObserver — reveal immediately
            sections.forEach(function (s) { s.classList.add('rs-revealed'); });
        }

        // 2) Active nav link based on current section in view.
        if ('IntersectionObserver' in window && navButtons.length) {
            var navById = {};
            navButtons.forEach(function (btn) {
                var txt = (btn.querySelector('.x-text-el') || {}).textContent;
                if (txt) navById[txt.trim().toLowerCase()] = btn;
            });

            this._navObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var id = entry.target.getAttribute('data-section');
                    if (!id) return;
                    var btn = navById[id];
                    if (!btn) return;
                    if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
                        // Clear others
                        Object.keys(navById).forEach(function (k) {
                            navById[k].classList.remove('rs-active');
                        });
                        btn.classList.add('rs-active');
                    }
                });
            }, { root: scroller, threshold: [0.4] });

            sections.forEach(function (s) { me._navObserver.observe(s); });
        }

        // 3) Scroll progress bar — updates on scroll, rAF-throttled.
        if (progressFill) {
            var ticking = false;
            this._scrollHandler = function () {
                if (ticking) return;
                ticking = true;
                requestAnimationFrame(function () {
                    var max = scroller.scrollHeight - scroller.clientHeight;
                    var pct = max > 0 ? scroller.scrollTop / max : 0;
                    progressFill.style.transform = 'scaleX(' + pct + ')';
                    ticking = false;
                });
            };
            scroller.addEventListener('scroll', this._scrollHandler, { passive: true });
            this._scrollHandler();
        }
    }
});
