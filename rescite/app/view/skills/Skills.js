Ext.define('RESCITE.view.skills.Skills', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-skills',

    cls: 'rs-section rs-skills',

    items: [
        {
            xtype: 'component',
            cls: 'rs-section-head',
            html: '<h2 class="rs-section-title">Skills</h2><div class="rs-section-rule"></div>'
        },
        {
            xtype: 'component',
            cls: 'rs-skill-groups',
            tpl: [
                '<tpl for=".">',
                    '<div class="rs-skill-group">',
                        '<div class="rs-skill-category">{category}</div>',
                        '<div class="rs-skill-chips">',
                            '<tpl for="items"><span class="rs-chip">{.}</span></tpl>',
                        '</div>',
                    '</div>',
                '</tpl>'
            ],
            bind: { data: '{skills}' }
        }
    ]
});
