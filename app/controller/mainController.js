 Ext.define('app.controller.mainController', {
     extend: 'Ext.app.Controller',
	 alias: 'controller.controller',
			
	 views: [
		'app.view.panelPerson',
		'app.view.gridPerson'
	 ],
			
     init: function() {
         this.control({
             'panelperson': {
              },
			 'gridperson': {
				  selectionchange: this.onGridPersonSelectionChange
			  },
			 'gridperson button[itemId=add]': {
				  click: this.onAdd
			  },
			 'gridperson button[itemId=delete]': {
				  click: this.onDelete
			  },
			  'gridperson button[itemId=save]': {
				  click: this.onSave
			  }
         });
     },

     onGridPersonSelectionChange: function(selModel, selections){
		var me = this, record = selections[0] || null,
			loMainPanel = Ext.getCmp('panelperson'),
		    loGrid = loMainPanel.down('gridperson'),
			loForm = loMainPanel.down('formperson');
		loGrid.down('#delete').setDisabled(selections.length === 0);
		me.setActiveRecord(record, loForm, loMainPanel);
     },
			
	 setActiveRecord: function(record, poForm, poPanel){
        poForm.activeRecord = record;
        if (record) {
		   poPanel.down('#save').enable();
           poForm.getForm().loadRecord(record);
        } else {
           poPanel.down('#save').disable();
           poForm.getForm().reset();
        }
     },

	onAdd: function(){
		var loMainPanel = Ext.getCmp('panelperson'),
		    loGrid = loMainPanel.down('gridperson'),
			loStore = loGrid.getStore();
		loStore.insert(0, new app.model.modelPerson());
    },
			
	onDelete: function(){
		var loMainPanel = Ext.getCmp('panelperson'),
		    loGrid = loMainPanel.down('gridperson'),
			loForm = loMainPanel.down('formperson'),
			loStore = loGrid.getStore(),
			selection = loGrid.getView().getSelectionModel().getSelection()[0];
			if (selection) {
				loStore.remove(selection);
				loForm.setActiveRecord(null);
				loForm.getForm().reset();
			}
    },
			
	onSave: function(poForm){
        var loMainPanel = Ext.getCmp('panelperson'),
		    loGrid = loMainPanel.down('gridperson');
		loGrid.getStore().sync();
    },
});