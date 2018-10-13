import {loadMessages} from './data/data.js';
import {loadBadWords} from './data/dataBadWords.js';
const initializeApp = () => {
    loadMessages();
    loadBadWords();
};

initializeApp();