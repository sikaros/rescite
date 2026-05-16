Ext.define('RESCITE.view.goals.Goals', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-goals',

    cls: 'rs-section rs-goals',

    items: [
        {
            xtype: 'component',
            cls: 'rs-section-head',
            html: '<h2 class="rs-section-title">Career Goals</h2><div class="rs-section-rule"></div>'
        },
        {
            xtype: 'component',
            cls: 'rs-prose rs-goals-text',
            tpl: '<p>{.}</p>',
            bind: { data: '{goals}' }
        }
    ]
});
