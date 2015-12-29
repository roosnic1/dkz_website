import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('String'),
  mail: DS.attr('String'),
  description: DS.attr('String'),
  image: DS.attr('String'),
  created: DS.attr('Number'),
  updated: DS.attr('Number')
});
