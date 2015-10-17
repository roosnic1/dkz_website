import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['postcard-form'],

	attributeBindings: ['height:style'],

	actualWidth: 0,

	height: Ember.computed('actualWidth', function() {
		return 'height: ' + Math.floor(this.get('actualWidth')/1.4558) + 'px;';
	}),

	notificationText: '',

	onNotificationText: Ember.observer('notificationText', function() {
		if(this.get('notificationText.length') === 0) {
			return;
		}
		var self = this;
		setTimeout(function() {
			console.log('executeTimeout');
			self.set('notificationText','');
		},5000);
	}),

	msg: {},

	didInsertElement: function() {
		this._super();
		this._resizeHandler = function() {
			this.set('actualWidth',this.$().innerWidth());
		}.bind(this);
		$(window).on('resize',this._resizeHandler);
		this._resizeHandler();
	},

	willDestroyElement: function() {
		this._super();
		$(window).off('resize',this._resizeHandler);
	},


	actions: {
		send: function() {
			this.set('notificationText','');
			if(this.get('msg.text') === undefined || this.get('msg.text.length') === 0) {
				this.set('notificationText','Bitte eine Nachricht eingeben');
				return;
			}

			if(this.get('msg.name') === undefined || this.get('msg.name.length') === 0) {
				this.set('notificationText','Bitte einen Namen eingeben');
				return;
			}

		}
	}


});
