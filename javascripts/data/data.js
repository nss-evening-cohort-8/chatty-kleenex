function executeOnError() {
    console.log("This shit doesn't work");
}

// Using console log below for now - will update with functionality // 

function executeOnLoad() {
    let data = JSON.parse(this.responseText);
    console.log("Do we see anything?");
}

// May need to change name of this later //

const loadData = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeOnLoad);
    myRequest.addEventListener("error", executeOnError);
    myRequest.open("get", "./db/data.json");
    myRequest.send();
};

export {loadData};