Ext.define('RESCITE.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
        loaded: false,
        hero: null,
        about: [],
        stats: [],
        experience: [],
        skills: [],
        projects: [],
        education: [],
        certifications: [],
        languages: [],
        goals: '',
        hobbies: [],
        contact: null
    }
});
