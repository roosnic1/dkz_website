import Ember from 'ember';

export default Ember.Controller.extend({

	playToEdit: null,
	memberToEdit: null,

	init: function() {
		this._super();
	},


	actions: {
		add: function(type) {
			var nType = this.store.createRecord(type,{});
			this.set(type+'ToEdit',nType);
		},
		save: function(type) {
			// TODO: validate play edits

			var self = this;
			this.get(type+'ToEdit').save().then(function() {
				self.set(type+'ToEdit',null);
				console.log('Saved ' + type);
			}, function(err) {
				console.warn('Could not save ' + type,err);
			});
		},
		edit: function(type,item) {
			this.set(type+'ToEdit',item);
		},
		delete: function(type,item) {
			var self = this;
			item.destroyRecord().then(function() {
				console.log('Deleted Play');
				self.set(type+'ToEdit',null)
			}, function(err) {
				console.warn('Could not delete ' + type,err);
			});
		},
		testAction: function() {
			console.log(this.get('model'));
		}
	}


});
