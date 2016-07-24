Ext.require([
  'Ext.data.*',
  'Ext.grid.*',
  'Ext.selection.CellModel',
  'Ext.toolbar.Paging',
  'Ext.form.field.Text',
  'app.model.modelPerson',
  'app.view.gridPerson',
  'app.model.storePerson',
  'app.view.panelPerson',
  'app.view.formPerson',
  'app.controller.mainController'
]);

Ext.application({
    name: 'UsersApp',
	controllers: ['app.controller.mainController'],
    launch: function() {
        Ext.create('app.view.panelPerson', {renderTo: document.body}).show();
    }
});
