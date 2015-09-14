import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('String'),
  func: DS.attr('String'),
  board: DS.attr('boolean'),
  description: DS.attr('String'),
  image: DS.attr('String'),
  mail: DS.attr('String')
});
