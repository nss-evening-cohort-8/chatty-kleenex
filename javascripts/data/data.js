import {messageBuilder, setMessages, getMessagez} from '../events/messages.js'

function executeOnError() {
    console.log("This shit doesn't work");
}

// Using console log below for now - will update with functionality // 

function executeOnLoad() {
    let data = JSON.parse(this.responseText);
    setMessages(data.messages);
    messageBuilder(getMessagez())
}

// May need to change name of this later //

const loadMessages = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeOnLoad);
    myRequest.addEventListener("error", executeOnError);
    myRequest.open("get", "./db/data.json");
    myRequest.send();
};

export {loadMessages};