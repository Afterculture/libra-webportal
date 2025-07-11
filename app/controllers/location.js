import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import ConfirmAction from 'ares-webportal/mixins/confirm-action';

export default Controller.extend(ConfirmAction, {
  gameApi: service(),
  flashMessages: service(),
  router: service(),

  resetOnExit: function() {
    this.hideActionConfirmation();
  },
      
  @action
  delete() {
    let api = this.gameApi;
    this.hideActionConfirmation();
    api.requestOne('deleteLocation', { id: this.get('model.id')}, null)
    .then( (response) => {
      if (response.error) {
        return;
      }
      this.router.transitionTo('locations');
      this.flashMessages.success('Location deleted!');
    });
  }
});