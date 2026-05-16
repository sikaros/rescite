Ext.define('RESCITE.Globals', {
    singleton: true,

    themePref: null,

    resumeUrl: 'app/data/resume.json',

    getStoredTheme: function () {
        try {
            return localStorage.getItem('rs-theme');
        } catch (e) {
            return null;
        }
    },

    setStoredTheme: function (value) {
        try {
            if (value) {
                localStorage.setItem('rs-theme', value);
            } else {
                localStorage.removeItem('rs-theme');
            }
        } catch (e) { /* ignore */ }
        this.themePref = value;
        document.documentElement.setAttribute('data-theme', value || '');
    },

    resolvedTheme: function () {
        var attr = document.documentElement.getAttribute('data-theme');
        if (attr === 'light' || attr === 'dark') return attr;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark' : 'light';
    }
});
