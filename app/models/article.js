import DS from 'ember-data';

export default DS.Model.extend({
  uuid: DS.attr(),
  title: DS.attr(),
  body: DS.attr()
});
