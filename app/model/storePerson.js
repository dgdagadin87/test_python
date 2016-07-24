Ext.define('app.model.storePerson', {
    extend: 'Ext.data.Store',
    autoLoad: true,
	autoSync: false,
	model: 'app.model.modelPerson',
	proxy: {
		type: 'rest',
		url: 'http://localhost/test/server/data.php',
		reader: {
			type: 'json',
			root: 'data'
		},
		writer: {
			type: 'json'
		}
	},
	listeners: {
		beforeload: function(store, operation, eOpts){
			//console.log(arguments);
			//operation.params.action = operation.action;
		},
		write: function(store, operation){
			var record = operation.getRecords()[0],
				name = Ext.String.capitalize(operation.action),
				verb;
				
				
			if (name == 'Destroy') {
				record = operation.records[0];
				verb = 'Destroyed';
			} else {
				verb = name + 'd';
			}
		}
	}
});
