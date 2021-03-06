import Ember from 'ember';

export default Ember.Helper.extend({
  router: Ember.inject.service(),

  compute(params) {
    return () => {
      return this.get('router').transitionTo(...params);
    };
  }
});
