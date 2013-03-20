

Ext.application({
    name: 'eaApprove',

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    glossOnIcon: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@114.png'
    },

    models: ['Worklist','History','Prdetail','PRWorklist','POWorklist','ERWorklist','Showlist','Erdetail','ERhistory' ],
    stores: ['Worklists','Historys','Prdetails','PRWorklists','POWorklists','ERWorklists','Showlists','Erdetails','ERhistorys' ],
    views: ['Main'],
    controllers: ['Application'],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'eaApprove.view.Main'
        });
    }
});