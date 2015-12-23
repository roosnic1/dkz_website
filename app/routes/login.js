import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  setupController(controller, model) {
    console.log('Login Route');
    controller.set('model',model);
    controller.set('session',this.get('session'));
  }
});
