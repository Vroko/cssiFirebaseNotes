let googleUser;
window.onload = (event) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("Logged in as:", user.displayName);
            googleUser = user;
            console.log(user);
            welcomeMessage = document.getElementById("customWelcome");
            welcomeMessage.innerHTML = "Great things await you " + user.displayName;
        } else {
            window.location = 'index.html';
        }
    });
}

function enterFireNotes() {
    window.location = "writeNote.html";
}