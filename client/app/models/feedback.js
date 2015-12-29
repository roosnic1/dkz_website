import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('String'),
  name: DS.attr('String'),
  email: DS.attr('String'),
  created: DS.attr('Number'),
  updated: DS.attr('Number')
});
