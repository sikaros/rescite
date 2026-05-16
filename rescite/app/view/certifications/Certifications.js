Ext.define('RESCITE.view.certifications.Certifications', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-certifications',

    cls: 'rs-section rs-certifications',

    items: [
        {
            xtype: 'component',
            cls: 'rs-section-head',
            html: '<h2 class="rs-section-title">Certifications</h2><div class="rs-section-rule"></div>'
        },
        {
            xtype: 'component',
            cls: 'rs-cert-grid',
            tpl: [
                '<tpl for=".">',
                    '<div class="rs-cert">',
                        '<div class="rs-cert-icon"><i class="x-fa fa-certificate" aria-hidden="true"></i></div>',
                        '<div class="rs-cert-body">',
                            '<div class="rs-cert-name">',
                                '<tpl if="url">',
                                    '<a href="{url}" target="_blank" rel="noopener">{name} <i class="x-fa fa-external-link rs-ext-link" aria-hidden="true"></i></a>',
                                '<tpl else>',
                                    '{name}',
                                '</tpl>',
                            '</div>',
                            '<div class="rs-cert-meta">{issuer} <span class="rs-dot">•</span> {year}</div>',
                        '</div>',
                    '</div>',
                '</tpl>'
            ],
            bind: { data: '{certifications}' }
        }
    ]
});
