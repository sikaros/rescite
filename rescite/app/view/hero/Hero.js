Ext.define('RESCITE.view.hero.Hero', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-hero',

    cls: 'rs-section rs-hero',

    items: [{
        xtype: 'component',
        cls: 'rs-hero-inner',
        tpl: [
            '<div class="rs-hero-grid">',
                '<div class="rs-hero-copy">',
                    '<div class="rs-hero-eyebrow">Resume / Portfolio</div>',
                    '<h1 class="rs-hero-name">{name}</h1>',
                    '<div class="rs-hero-title">{title}</div>',
                    '<p class="rs-hero-tagline">{tagline}</p>',
                    '<div class="rs-hero-meta">{location}</div>',
                '</div>',
                '<tpl if="photo">',
                    '<div class="rs-hero-photo-wrap">',
                        '<img class="rs-hero-photo" src="{photo}" alt="Headshot of {name}" width="240" height="310">',
                    '</div>',
                '</tpl>',
            '</div>'
        ],
        bind: { data: '{hero}' }
    }]
});
