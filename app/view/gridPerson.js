Ext.define('app.view.gridPerson', {
      extend: 'Ext.grid.Panel',
	  width: '100%',
	  autoScroll: true,
	  alias: 'widget.gridperson',
	  //height: 500,
	  store: Ext.create('app.model.storePerson'),
	  columns: [{
		  text: 'ID',
		  width: 40,
		  sortable: true,
		  dataIndex: 'id'
	  }, {
		  text: 'Email',
		  flex: 1,
		  sortable: true,
		  dataIndex: 'email',
		  field: {
			  xtype: 'textfield'
		  }
	  }, {
		  header: 'First',
		  width: 80,
		  sortable: true,
		  dataIndex: 'first',
		  field: {
			  xtype: 'textfield'
		  }
	  }, {
		  text: 'Last',
		  width: 80,
		  sortable: true,
		  dataIndex: 'last',
		  field: {
			  xtype: 'textfield'
		  }
	  }, {
		  text: 'Date',
		  width: 120,
		  sortable: true,
		  dataIndex: 'date',
		  editor: {
			  xtype: 'datefield',
			  format: 'm/d/y',
			  minValue: '01/01/06',
			  disabledDays: [0, 6],
			  disabledDaysText: 'Plants are not available on the weekends'
		  }
		}, {
		  text: 'Year',
		  width: 60,
		  sortable: true,
		  dataIndex: 'year',
		  field: {
			  xtype: 'numberfield'
		  }
	  }
	  ],
	  dockedItems: [{
		  xtype: 'toolbar',
		  items: [{
			  text: 'Add',
			  itemId: 'add',
			  iconCls: 'icon-add'
		  },
		  '-',
		  {
			  itemId: 'delete',
			  text: 'Delete',
			  iconCls: 'icon-delete',
			  disabled: true
		  },
		  '-',
		  {
			  iconCls: 'icon-save',
			  itemId: 'save',
			  text: 'Sync',
			  scope: this
		  }
		]
	  }],
	  initComponent: function(){
		  var me = this;
 		  var cellEditing = new Ext.grid.plugin.CellEditing({
 			  clicksToEdit: 2
 		  });
		  me.bbar = Ext.create('Ext.PagingToolbar', {
			store: me.store,
			emptyMsg: "No topics to display"
		  });
		  this.plugins = [cellEditing];
		  me.callParent(arguments);
	  }
});
