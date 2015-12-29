import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin,{

	//session: Ember.inject.service('session'),


	model: function() {
		return Ember.RSVP.hash({
			plays: this.store.findAll('play'),
			members: this.store.findAll('member'),
			posts: this.store.findAll('post'),
			histories: this.store.findAll('history')
		});
	},

	setupController: function(controller, model) {
    console.log(this.get('session.isAuthenticated'));
		this.get('session').on('authneticationSucceeded',function() {
				console.log('auth succeeded');
			});
		controller.set('model',model);
		controller.set('session',this.get('session'));
	},

	init: function() {
		this._super();
		//console.log('admin route init',this.get('session'));
	}

});
