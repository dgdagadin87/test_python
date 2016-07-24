Ext.define('app.view.formPerson', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formperson',
		   
    initComponent: function(){
        this.addEvents('create');
        Ext.apply(this, {
            activeRecord: null,
            defaultType: 'textfield',
            bodyPadding: 5,
            fieldDefaults: {
                anchor: '100%',
                labelAlign: 'right'
            },
            items: [{
                fieldLabel: 'Email',
                name: 'email',
                allowBlank: false,
                vtype: 'email'
            }, {
                fieldLabel: 'First',
                name: 'first',
                allowBlank: false
            }, {
                fieldLabel: 'Last',
                name: 'last',
                allowBlank: false
            }, {
				xtype: 'datefield',
                fieldLabel: 'Date',
                name: 'date',
                allowBlank: false
            }, {
                fieldLabel: 'Year',
                name: 'year',
                allowBlank: false
            }],
        });
		Ext.each(this.items, function(item){
			item.listeners = {
				change: function(poFld, newValue, oldValue, eOpts){
					var loMainPanel = Ext.getCmp('panelperson'),
						loGrid = loMainPanel.down('gridperson'),
						loRec = loGrid.getSelectionModel().getSelection()[0] || null;
					if (loRec === null) {return true;}
					var name = poFld.name, value = poFld.getValue();
					loRec.set(name, value);
				}
			}
		});
        this.callParent();
    },

//     setActiveRecord: function(record){
//         this.activeRecord = record;
//         if (record) {
//             this.down('#save').enable();
//             this.getForm().loadRecord(record);
//         } else {
//             this.down('#save').disable();
//             this.getForm().reset();
//         }
//     },
// 
//     onSave: function(){
//         var active = this.activeRecord,
//             form = this.getForm();
// 
//         if (!active) {
//             return;
//         }
//         if (form.isValid()) {
//             form.updateRecord(active);
//             this.onReset();
//         }
//     },
// 
//     onCreate: function(){
//         var form = this.getForm();
// 
//         if (form.isValid()) {
//             this.fireEvent('create', this, form.getValues());
//             form.reset();
//         }
// 
//     },
// 
//     onReset: function(){
//         this.setActiveRecord(null);
//         this.getForm().reset();
//     }
});