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
			back ? pi -= 1 : pi += 1;
			if(!back && pi === this.get('model.plays.length')) {
				pi = 0;
			} else if(back && pi === -1) {
				pi = this.get('model.plays.length') - 1;
			}
			this.set('playIndex',pi);
		},
		nextHistory: function(back) {
			var hi = this.get('historyIndex');
			back ? hi -= 1 : hi += 1;
			if(!back && hi === this.get('model.histories.length')) {
				hi = 0;
			} else if(back && hi === 0) {
				hi = this.get('model.histories.length') - 1;
			}
			this.set('historyIndex',hi);
		},
		saveFeedback: function(msg) {
			msg.created = new Date().getTime();
			msg.updated = new Date().getTime();
			this.store.createRecord('feedback',msg).save();
		}
	}

});
