/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'RESCITE.Application',

    name: 'RESCITE',

    requires: [
        // This will automatically load all classes in the RESCITE namespace
        // so that application classes do not need to require each other.
        'RESCITE.*'
    ],

    // The name of the initial view to create.
    mainView: 'RESCITE.view.main.Main'
});
