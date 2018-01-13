import { gte, and, match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({

  emailAddress: '',
  messageEmail: '',
  responseMessage: '',

  isLongEnough: gte('messageEmail.length', 5),
  isBothTrue: and('emailAddress', 'messageEmail'),
  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isNotValid: not('isValidEmail'),

  actions: {

    sendMessage(){
      this.set('emailAddress', '');
      this.set('messageEmail', '');
      this.set('responseMessage', 'Thanks! We got your message and we’ll get in touch soon');
    }
  }
});
