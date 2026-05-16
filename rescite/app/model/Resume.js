Ext.define('RESCITE.model.Resume', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'hero',       type: 'auto' },
        { name: 'about',      type: 'auto' },
        { name: 'stats',      type: 'auto' },
        { name: 'experience', type: 'auto' },
        { name: 'skills',     type: 'auto' },
        { name: 'projects',   type: 'auto' },
        { name: 'goals',      type: 'string' },
        { name: 'hobbies',    type: 'auto' },
        { name: 'contact',    type: 'auto' }
    ]
});
