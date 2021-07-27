let googleUser;
window.onload = (event) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("Logged in as:", user.displayName);
            googleUser = user;
            //loadNotes();
        } else {
            window.location = 'index.html';
        }
    });
}

function loadNotes() {
    const notesRef = firebase.database().ref(`/users`);
    notesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        
    });
}