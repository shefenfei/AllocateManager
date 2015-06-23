/**
 * Created by she on 15-6-23.
 */
Ext.require('Ext.container.Viewport');
Ext.application({
    name: "hello world",
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region: 'north',
                    margins: '0 0 5 0',
                    html: '<h1 class="x-panel-header" >Manager System</h1>',
                    border: false
                },
                {
                    region: 'west',
                    collapsible: true,
                    title: '管理菜单',
                    width: 300
                },
                {
                    region: 'east',
                    title: 'East Panel',
                    collapsible: true,
                    split: true,
                    width: 150
                },
                {
                    region: 'south',
                    title: '版权所有ⓒCopyright fenfei.she',
                    collapsible: false,
                    split: true,
                    width: 150
                },
                {
                    region: 'center',
                    xtype: 'tabpanel', // TabPanel itself has no title
                    activeTab: 0,      // First tab active by default
                    items: {
                        title: 'Default Tab',
                        html: 'The first tab\'s content. Others may be added dynamically'
                    }
                }
            ]
        });
    }
});