import { match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  headerMessage: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

    saveInvitation() {
      alert('Saving of the following email address is in progress');
      this.set('responseMessage', 'Thank You! Weve just saved your email address');
      this.set('headerMessage', 'Coming Soon Wait For Launch');
      this.set('emailAddress', '');
    }
  }
});
