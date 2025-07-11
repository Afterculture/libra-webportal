import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { scrollElementToBottom } from 'ares-webportal/helpers/scroll-element';

export default Controller.extend({    
  gameApi: service(),
  gameSocket: service(),
  flashMessages: service(),
  router: service(),
  status: '',

  resetOnExit: function() {
    this.set('status', '');
  },

  onManageActivity: function(type, msg /* , timestamp */ ) {
    this.addToStatus(msg);
  },
    
  setupCallback: function() {
    let self = this;
    this.set('status', '');
    this.gameSocket.setupCallback('manage_activity', function(type, msg, timestamp) {
      self.onManageActivity(type, msg, timestamp) 
    } );
  },
    
  addToStatus: function(message) {
    let old_status = this.status;
    this.set('status', `${old_status}\n${message}`);
    
    scrollElementToBottom('manageLog');    
  },
      
  @action
  deploy() {
    let api = this.gameApi;
    this.set('status', '');
    this.addToStatus('Website redeploying. Please wait.');

    api.requestOne('deployWebsite', null)
    .then( (response) => {
      this.addToStatus(response.message);
    });  
  },
        
  @action
  returnToManage() {
    this.set('status', '');
  },
      
  @action
  shutdown() {
    let api = this.gameApi;

    this.set('status', '');
    api.requestOne('shutdown')
    .then( (response) => {
      if (response.error) {
        return;
      }
        
      this.router.transitionTo('shutdown');
    });  
  },
        
  @action
  upgrade(stage) {
    let api = this.gameApi;
    this.set('status', '');
    this.addToStatus('Starting upgrade. Please wait.');
    api.requestOne('upgrade', { 'stage': stage })
    .then( (response) => {
      this.addToStatus(response.message);
    });
  }  
});