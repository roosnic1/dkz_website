import Ember from 'ember';

export default Ember.Controller.extend({
	newestPost: Ember.computed('model.posts.[]',function() {
		return this.get('model.posts').sortBy('created').get('lastObject');
	}),

	playIndex: 0,
	play: Ember.computed('model.plays.[]', 'playIndex', function() {
		//Use reverse() to get the youngest play first.
		return this.get('model.plays').sortBy('year').reverse()[this.get('playIndex')];
	}),

	historyIndex: 0,
	history: Ember.computed('model.histories.[]', 'historyIndex', function() {
		return this.get('model.histories').sortBy('year')[this.get('historyIndex')];
	}),

	actions: {
		nextPlay: function(back) {
			var pi = this.get('playIndex');
			if(!back && pi++ === this.get('model.plays.length')) {
				pi = 0;
			} else if(back && pi-- === 0) {
				pi = this.get('model.plays.length') - 1;
			}
			this.set('playIndex',pi);
		},
		nextHistory: function(back) {
			var pi = this.get('historyIndex');
			if(!back && pi++ === this.get('model.histories.length')) {
				pi = 0;
			} else if(back && pi-- === 0) {
				pi = this.get('model.histories.length') - 1;
			}
			this.set('historyIndex',pi);
		},
		saveFeedback: function(msg) {
			msg.created = new Date().getTime();
			msg.updated = new Date().getTime();
			this.store.createRecord('feedback',msg).save();
		}
	}

});
