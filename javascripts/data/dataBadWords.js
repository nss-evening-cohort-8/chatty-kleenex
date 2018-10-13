import {setMessages, getMessagez,badWords} from '../events/eventlisteners.js';

function executeOnError() {
    console.log("This shit doesn't work");
}

// Using console log below for now - will update with functionality // 

function executeOnLoad() {
    let data = JSON.parse(this.responseText);
    setMessages(data.words);
    badWords(getMessagez())
}

// May need to change name of this later //

const loadBadWords = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeOnLoad);
    myRequest.addEventListener("error", executeOnError);
    myRequest.open("get", "./db/badWords.json");
    myRequest.send();
};

export {loadBadWords};