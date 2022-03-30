function store() {// to store items in the local storage
    var question = document.getElementById('inputQuestion').value;

    const answer = {
        question: question,
    }

    window.localStorage.setItem(key,JSON.stringify(answer));
}

function retrieveRecords(){ //retrieves items in the localStorage
    console.log("retrieve records");
     var key = document.getElementById('retrieveKey').value;
    var records = window.localStorage.getItem(key);
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("carForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}

