import {printToDom} from '../helpers/util.js'

let messages = [];
let counter = 0;

const setMessages = (newArray) => {
    messages = newArray;
};

const getMessagez = () => {
    return messages;
}

const messageBuilder = () => {
    let newString = '';
    for (let i = 0; i < messages.length; i++) {
        newString += `<p>${messages[i].user}: `
        newString += `${messages[i].message} `
        newString += `${messages[i].timestamp}`
        newString += `</p>`
    }
    printToDom(newString, 'messageArea')
    counter++;
};

export {messageBuilder, messages, setMessages, getMessagez}