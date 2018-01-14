import { match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  headerMessage: 'Coming Soon',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save();

      this.set('responseMessage', 'Thank You! Weve just saved your email address');
      this.set('emailAddress', '');
    }
  }
});
