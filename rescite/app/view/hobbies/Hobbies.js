Ext.define('RESCITE.view.hobbies.Hobbies', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-hobbies',

    cls: 'rs-section rs-hobbies',

    items: [
        {
            xtype: 'component',
            cls: 'rs-section-head',
            html: '<h2 class="rs-section-title">Outside Work</h2><div class="rs-section-rule"></div>'
        },
        {
            xtype: 'component',
            cls: 'rs-hobbies-list',
            tpl: [
                '<tpl for=".">',
                    '<div class="rs-hobby">',
                        '<i class="x-fa {icon}" aria-hidden="true"></i>',
                        '<span class="rs-hobby-text">{label}</span>',
                    '</div>',
                '</tpl>'
            ],
            bind: { data: '{hobbies}' }
        }
    ]
});
