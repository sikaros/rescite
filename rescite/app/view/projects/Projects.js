Ext.define('RESCITE.view.projects.Projects', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-projects',

    cls: 'rs-section rs-projects',

    items: [
        {
            xtype: 'component',
            cls: 'rs-section-head',
            html: '<h2 class="rs-section-title">Selected Projects</h2><div class="rs-section-rule"></div>'
        },
        {
            xtype: 'component',
            cls: 'rs-project-grid',
            tpl: [
                '<tpl for=".">',
                    '<article class="rs-project-card">',
                        '<div class="rs-project-name">',
                            '<tpl if="url">',
                                '<a href="{url}" target="_blank" rel="noopener">{name} <i class="x-fa fa-external-link rs-ext-link" aria-hidden="true"></i></a>',
                            '<tpl else>',
                                '{name}',
                            '</tpl>',
                        '</div>',
                        '<div class="rs-project-context">{context}</div>',
                        '<p class="rs-project-blurb">{blurb}</p>',
                    '</article>',
                '</tpl>'
            ],
            bind: { data: '{projects}' }
        }
    ]
});
