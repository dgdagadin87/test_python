 
Ext.define('app.view.filterPerson', {
    extend: 'Ext.form.Panel',
    alias: 'widget.filterperson',
    initComponent: function(){
		var bookStore = new Ext.data.Store({
			proxy: {
				type: 'jsonp',
				url: 'http://dagadin.srv-astra-se-14-home.crvas.rbt/test/server/combo.php',
				reader: {
					type: 'json',
					totalProperty: 'totalItems',
					root: 'data'
				}
			},
			fields: [{
				name: 'year',
			}]
		});
	  
        Ext.apply(this, {
			
            activeRecord: null,
            defaultType: 'textfield',
            bodyPadding: 5,
            items: [{
				  xtype: 'fieldcontainer',
				  layout: 'column',
				  items: [
					  {
						  columnWidth:.3,
						  name: 'first',
						  allowBlank: true,
						  xtype: 'textfield',
						  emptyText: 'Enter email'
					  },
					  {
						  columnWidth:.3,
						  itemId:'dateFilter',
						  name: 'date',
						  allowBlank: true,
						  xtype: 'datefield',
						  emptyText: 'Enter date',
						  style:'margin-left:2px;'
					  },
					  {
						  displayField: 'year',
						  valueField: 'year',
						  columnWidth:.3,
						  store: bookStore,
						  queryParam: 'q',
						  queryMode: 'remote',
						  xtype: 'combo',
						  triggerAction: 'last'
					  }
				  ]
			}],
        });
        this.callParent();
    },
});