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
                '<a class="rs-contact-link" href="mailto:{email}" aria-label="Email"><i class="x-fa fa-envelope" aria-hidden="true"></i><span>Email</span></a>',
                '<tpl if="linkedin">',
                    '<a class="rs-contact-link" href="{linkedin}" target="_blank" rel="noopener"><img class="rs-contact-icon-img" src="resources/images/linkedin-icon.png" alt="LinkedIn"><span>LinkedIn</span></a>',
                '</tpl>',
                '<tpl if="github">',
                    '<a class="rs-contact-link" href="{github}" target="_blank" rel="noopener"><img class="rs-contact-icon-img" src="resources/images/github-icon.png" alt="GitHub"><span>GitHub</span></a>',
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
