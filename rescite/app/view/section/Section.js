Ext.define('RESCITE.view.section.Section', {
    extend: 'Ext.Container',
    xtype: 'rs-section',

    cls: 'rs-section',

    config: {
        sectionId: null,
        heading: null
    },

    initialize: function () {
        this.callParent();
        var id = this.getSectionId();
        if (id && this.element) {
            this.element.dom.setAttribute('id', 'rs-section-' + id);
            this.element.dom.setAttribute('data-section', id);
        }
    }
});
