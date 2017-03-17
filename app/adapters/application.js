import DrupalJSONAPIAdapter from 'ember-data-drupal/adapter';

export default DrupalJSONAPIAdapter.extend({
  host: 'http://www.chrishamper.dev:8000',
  namespace: 'jsonapi'
});
