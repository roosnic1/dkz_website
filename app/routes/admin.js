import Ember from 'ember';


export default Ember.Route.extend({

	session: Ember.inject.service('session'),


	model: function() {
		return Ember.RSVP.hash({
			plays: this.store.findAll('play'),
			members: this.store.findAll('member'),
			posts: this.store.findAll('post'),
			histories: this.store.findAll('history')
		});
	},

	setupController: function(controller, model) {
		this.get('session').on('authneticationSucceeded',function() {
				console.log('auth succeeded');
			});
		controller.set('model',model);
		controller.set('session',this.get('session'));
	},

	/*init: function() {
		this._super();
		//console.log('admin route init',this.get('session'));
	},*/

	actions: {
		logout: function() {
			this.get('session').invalidate().then(function() {
				console.log('logout');
			});
		}
	}

});
