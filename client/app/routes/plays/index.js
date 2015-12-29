import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('play');
	},

	setupController: function(controller,model) {
		controller.set('model',model);
		controller.set('sortProperties',['year:desc']);
		//controller.set('model',model.sortBy('year').reverse());
	}

});
