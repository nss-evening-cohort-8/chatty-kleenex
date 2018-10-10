import {loadMessages} from './data/data.js'
import {messageBuilder} from './events/messages.js'

const initializeApp = () => {
    loadMessages();
};

initializeApp();