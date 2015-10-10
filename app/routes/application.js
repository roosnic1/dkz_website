import Ember from 'ember';

export default Ember.Route.extend({




	actions: {
		goToPost: function(id) {
			this.transitionTo('posts.post',id);
		}
	}
});
