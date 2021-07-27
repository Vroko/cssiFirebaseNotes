console.log("write note running");
let googleUser;

window.onload = (event) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("Logged in as:", user.displayName);
            googleUser = user;
        } else {
            window.location = 'index.html';
        }
    });
}

function handleNoteSubmit(){
    // get info from the form
    let noteTitle = document.getElementById("noteTitle");
    let noteText = document.getElementById("noteText");
    // format the data & write to db
    firebase.database().ref(`users/${googleUser.uid}`).push({
        title: noteTitle.value,
        text: noteText.value,
        created: ""
    });
    // clear out the form
    noteText.value = "";
    noteTitle.value = "";

}

function viewNotes() {
    window.location = "viewNotes.html";
}