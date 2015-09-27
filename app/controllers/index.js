import Ember from 'ember';

export default Ember.Controller.extend({
	newestPost: Ember.computed('model.posts.[]',function() {
		console.log('test');
		return this.get('model.posts').sortBy('created').get('lastObject');
	}),



	actions: {
		goToPost: function(id) {
			this.transitionToRoute('post',id);
		}
	}
});
