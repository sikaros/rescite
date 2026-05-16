Ext.define('RESCITE.view.experience.Experience', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-experience',

    cls: 'rs-section rs-experience',

    items: [
        {
            xtype: 'component',
            cls: 'rs-section-head',
            html: '<h2 class="rs-section-title">Experience</h2><div class="rs-section-rule"></div>'
        },
        {
            xtype: 'component',
            cls: 'rs-timeline',
            tpl: [
                '<tpl for=".">',
                    '<article class="rs-job">',
                        '<header class="rs-job-head">',
                            '<div class="rs-job-role">{role}</div>',
                            '<div class="rs-job-company">{company}<tpl if="location"> <span class="rs-dot">•</span> {location}</tpl></div>',
                            '<div class="rs-job-dates">{dates}</div>',
                        '</header>',
                        '<p class="rs-job-summary">{summary}</p>',
                        '<ul class="rs-job-bullets">',
                            '<tpl for="bullets"><li>{.}</li></tpl>',
                        '</ul>',
                    '</article>',
                '</tpl>'
            ],
            bind: { data: '{experience}' }
        }
    ]
});
