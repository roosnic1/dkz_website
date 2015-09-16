import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('String'),
  description: DS.attr('String'),
  createdAt: DS.attr('Number'),
  imgData: DS.attr('String')
});
