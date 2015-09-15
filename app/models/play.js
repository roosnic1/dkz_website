import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('String'),
    subtitle: DS.attr('String'),
    description: DS.attr('String'),
    year: DS.attr('Number'),
    location: DS.attr('String'),
    picture: DS.attr('String'),
    //Playdates
    director: DS.attr('String'),
    writer: DS.attr('String'),
    orgWriter: DS.attr('String'),
    music: DS.attr('String'),
    actors: DS.attr('String'),
    assistant: DS.attr('String'),
    costume: DS.attr('String'),
    makeup: DS.attr('String'),
    build: DS.attr('String'),
    tech: DS.attr('String'),
    design: DS.attr('String'),
    helper: DS.attr('String'),
    sales: DS.attr('String'),
    eveningSales: DS.attr('String'),
    pdfLink: DS.attr('String')
});
