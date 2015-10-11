import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('String'),
    subtitle: DS.attr('String'),
    description: DS.attr('String'),
    year: DS.attr('Number'),
    director: DS.attr('String'),
    writer: DS.attr('String'),
    orgWriter: DS.attr('String'),
    music: DS.attr('String'),
    backImg: DS.attr('String'),
    prevImg: DS.attr('String'),
    created: DS.attr('Number'),
    updated: DS.attr('Number')
});
