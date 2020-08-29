// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCZsgGnnwsk4ea6cVC1I6Ez49RWoVWIzjE",
    authDomain: "tazas-5ff28.firebaseapp.com",
    projectId: "tazas-5ff28"
});

var db = firebase.firestore();

// db.collection("users").add({
//         first: "Ada",
//         last: "Lovelace",
//         born: 1815
//     })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });

db.collection("tazablanca").onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.id);
        tb.innerHTML = doc.data().cantidad;
        tbgeneral.innerHTML = doc.data().cantidad;
        blancaid.innerHTML = doc.id;
    });
});


function actualizarbd(blancaid, nuevo) {
    nuevo = parseInt(nuevo);
    id = blancaid.textContent;
    var actualizar = db.collection("tazablanca").doc(id);
    // Set the "capital" field of the city 'DC'
    return actualizar.update({
            cantidad: nuevo
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        })
}