import Ember from 'ember';

export default Ember.Controller.extend({
	sortedModel: Ember.computed.sort('model','sortProperties')
});
