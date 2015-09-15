import Ember from 'ember';

export default Ember.Controller.extend({

	playToEdit: null,

	init: function() {
		this._super();
	},


	actions: {
		addPlay: function() {
			var nplay = this.store.createRecord('play',{})
			this.set('playToEdit',nplay);
		},
		savePlay: function() {
			// TODO: validate play edits

			var self = this;
			this.get('playToEdit').save().then(function() {
				self.set('playToEdit',null);
				console.log('Saved Play');
			}, function(err) {
				console.warn('Could not save Play',err);
			});
		},
		editPlay: function(play) {
			this.set('playToEdit',play);
		},
		deletePlay: function(play) {
			var self = this;
			play.destroyRecord().then(function() {
				console.log('Deleted Play');
				self.set('playToEdit',null)
			}, function(err) {
				console.warn('Could not delete Play',err);
			});
		},
		testAction: function() {
			console.log(this.get('model'));
		}
	}


});
