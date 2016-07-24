Ext.define('app.view.panelPerson', {
	extend: 'Ext.window.Window',
	alias: 'widget.panelperson',
	id:'panelperson',
	layout: 'border',
	modal:true,
	title: 'Users',
	controller: 'controller',
	width: 1200,
	height:350,
	defaults: {
		collapsible: true,
		split: false,
		bodyPadding: 0
	},
	items: [
		{
			region: 'north',
			height: 35,
			collapsed:false,
			collapsible:false,
			items: [Ext.create('app.view.filterPerson')]
		},
		{
			title: 'Form',
			region:'east',
			floatable: false,
			margins: '0 0 0 0',
			width: 375,
			items: [Ext.create('app.view.formPerson')]
		},
		{
			collapsible: false,
			region: 'center',
			margins: '0 0 0 0',
			items: [
				{
					autoScroll: true,
					collapsible: false,
					layout: 'fit',
					items: [Ext.create('app.view.gridPerson')] 
				}
			] 
		}
	]
});