Ext.define('RESCITE.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.Toolbar',
        'Ext.Button',
        'RESCITE.view.hero.Hero',
        'RESCITE.view.stats.Stats',
        'RESCITE.view.experience.Experience',
        'RESCITE.view.skills.Skills',
        'RESCITE.view.projects.Projects',
        'RESCITE.view.education.Education',
        'RESCITE.view.certifications.Certifications',
        'RESCITE.view.about.About',
        'RESCITE.view.goals.Goals',
        'RESCITE.view.languages.Languages',
        'RESCITE.view.contact.Contact'
    ],

    controller: 'main',
    viewModel: 'main',

    cls: 'rs-app',
    layout: 'vbox',
    height: '100%',
    width: '100%',

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            cls: 'rs-topnav',
            shadow: false,
            items: [
                {
                    xtype: 'button',
                    ui: 'plain',
                    cls: 'rs-brand-btn',
                    text: 'Home',
                    ariaLabel: 'Back to top',
                    handler: 'onBrandClick'
                },
                '->',
                { xtype: 'button', ui: 'plain', text: 'Experience',     ariaLabel: 'Jump to Experience',     cls: 'rs-navlink', data: { target: 'experience' },     handler: 'onScrollTo' },
                { xtype: 'button', ui: 'plain', text: 'Skills',         ariaLabel: 'Jump to Skills',         cls: 'rs-navlink', data: { target: 'skills' },         handler: 'onScrollTo' },
                { xtype: 'button', ui: 'plain', text: 'Projects',       ariaLabel: 'Jump to Projects',       cls: 'rs-navlink', data: { target: 'projects' },       handler: 'onScrollTo' },
                { xtype: 'button', ui: 'plain', text: 'Certifications', ariaLabel: 'Jump to Certifications', cls: 'rs-navlink', data: { target: 'certifications' }, handler: 'onScrollTo' },
                { xtype: 'button', ui: 'plain', text: 'About',          ariaLabel: 'Jump to About',          cls: 'rs-navlink', data: { target: 'about' },          handler: 'onScrollTo' },
                { xtype: 'button', ui: 'plain', text: 'Contact',        ariaLabel: 'Jump to Contact',        cls: 'rs-navlink', data: { target: 'contact' },        handler: 'onScrollTo' },
                {
                    xtype: 'button',
                    ui: 'plain',
                    reference: 'themeToggle',
                    cls: 'rs-themetoggle',
                    iconCls: 'x-fa fa-moon-o',
                    tooltip: 'Switch theme',
                    ariaLabel: 'Toggle light/dark theme',
                    handler: 'onToggleTheme'
                }
            ]
        },
        {
            xtype: 'component',
            reference: 'progressBar',
            cls: 'rs-progress',
            docked: 'top',
            height: 2,
            html: '<div class="rs-progress-fill"></div>'
        },
        {
            xtype: 'container',
            flex: 1,
            scrollable: 'y',
            cls: 'rs-scroll',
            items: [
                { xtype: 'rs-hero',           sectionId: 'hero' },
                { xtype: 'rs-stats',          sectionId: 'stats' },
                { xtype: 'rs-experience',     sectionId: 'experience' },
                { xtype: 'rs-skills',         sectionId: 'skills' },
                { xtype: 'rs-projects',       sectionId: 'projects' },
                { xtype: 'rs-certifications', sectionId: 'certifications' },
                { xtype: 'rs-education',      sectionId: 'education' },
                { xtype: 'rs-about',          sectionId: 'about' },
                { xtype: 'rs-goals',          sectionId: 'goals' },
                { xtype: 'rs-languages',      sectionId: 'languages' },
                { xtype: 'rs-contact',        sectionId: 'contact' }
            ]
        }
    ]
});
