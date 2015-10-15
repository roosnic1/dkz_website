import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['postcard-form'],

	attributeBindings: ['height:style'],

	actualWidth: 0,

	height: Ember.computed('actualWidth', function() {
		return "height: " + Math.floor(this.get('actualWidth')/1.4558) + "px;";
	}),

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
	}
});
