Ext.define('RESCITE.view.about.About', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-about',

    cls: 'rs-section rs-about',

    items: [
        {
            xtype: 'component',
            cls: 'rs-section-head',
            html: '<h2 class="rs-section-title">About</h2><div class="rs-section-rule"></div>'
        },
        {
            xtype: 'component',
            cls: 'rs-prose',
            tpl: [
                '<tpl for=".">',
                    '<p>{.}</p>',
                '</tpl>'
            ],
            bind: { data: '{about}' }
        }
    ]
});
