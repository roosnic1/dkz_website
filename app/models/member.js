import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('String'),
  func: DS.attr('String'),
  board: DS.attr('boolean'),
  description: DS.attr('String'),
  images: DS.hasMany('image',{async: true}),
  mail: DS.attr('String')
});
