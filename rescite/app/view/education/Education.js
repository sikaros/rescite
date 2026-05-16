Ext.define('RESCITE.view.education.Education', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-education',

    cls: 'rs-section rs-education',

    items: [
        {
            xtype: 'component',
            cls: 'rs-section-head',
            html: '<h2 class="rs-section-title">Education</h2><div class="rs-section-rule"></div>'
        },
        {
            xtype: 'component',
            cls: 'rs-education-list',
            tpl: [
                '<tpl for=".">',
                    '<div class="rs-edu">',
                        '<div class="rs-edu-school">{school}</div>',
                        '<div class="rs-edu-degree">{degree}<tpl if="dates"> <span class="rs-dot">•</span> {dates}</tpl></div>',
                        '<tpl if="note"><p class="rs-edu-note">{note}</p></tpl>',
                    '</div>',
                '</tpl>'
            ],
            bind: { data: '{education}' }
        }
    ]
});
