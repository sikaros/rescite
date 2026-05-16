Ext.define('RESCITE.view.stats.Stats', {
    extend: 'RESCITE.view.section.Section',
    xtype: 'rs-stats',

    cls: 'rs-section rs-stats',

    items: [{
        xtype: 'component',
        cls: 'rs-stats-grid',
        tpl: [
            '<tpl for=".">',
                '<div class="rs-stat" style="--rs-stagger:{[xindex]};">',
                    '<div class="rs-stat-value" data-target="{value}">{value}</div>',
                    '<div class="rs-stat-label">{label}</div>',
                '</div>',
            '</tpl>'
        ],
        bind: { data: '{stats}' }
    }]
});
