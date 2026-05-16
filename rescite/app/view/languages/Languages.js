Ext.define('RESCITE.view.languages.Languages', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-languages',

    cls: 'rs-section rs-languages',

    items: [
        {
            xtype: 'component',
            cls: 'rs-section-head',
            html: '<h2 class="rs-section-title">Languages</h2><div class="rs-section-rule"></div>'
        },
        {
            xtype: 'component',
            cls: 'rs-lang-list',
            tpl: [
                '<tpl for=".">',
                    '<div class="rs-lang">',
                        '<span class="rs-lang-name">{name}</span>',
                        '<span class="rs-lang-level">{level}</span>',
                    '</div>',
                '</tpl>'
            ],
            bind: { data: '{languages}' }
        }
    ]
});
