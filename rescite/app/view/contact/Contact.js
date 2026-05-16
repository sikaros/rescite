Ext.define('RESCITE.view.contact.Contact', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-contact',

    cls: 'rs-section rs-contact',

    items: [
        {
            xtype: 'component',
            cls: 'rs-section-head',
            html: '<h2 class="rs-section-title">Contact</h2><div class="rs-section-rule"></div>'
        },
        {
            xtype: 'component',
            cls: 'rs-contact-links',
            tpl: [
                '<a class="rs-contact-link" href="mailto:{email}"><i class="x-fa fa-envelope-o" aria-hidden="true"></i><span>{email}</span></a>',
                '<tpl if="linkedin">',
                    '<a class="rs-contact-link" href="{linkedin}" target="_blank" rel="noopener"><i class="x-fa fa-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a>',
                '</tpl>',
                '<tpl if="github">',
                    '<a class="rs-contact-link" href="{github}" target="_blank" rel="noopener"><i class="x-fa fa-github" aria-hidden="true"></i><span>GitHub</span></a>',
                '</tpl>'
            ],
            bind: { data: '{contact}' }
        },
        {
            xtype: 'component',
            cls: 'rs-footer',
            html: '<div>© <span id="rs-year"></span> Oscar Ayala · Built with Sencha Ext JS</div>'
        }
    ]
});
