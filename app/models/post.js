import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('String'),
  text: DS.attr('String'),
  author: DS.attr('String'),
  created: DS.attr('Number'),
  updated: DS.attr('Number')
});
