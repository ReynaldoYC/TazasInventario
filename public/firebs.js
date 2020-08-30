// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCZsgGnnwsk4ea6cVC1I6Ez49RWoVWIzjE",
    authDomain: "tazas-5ff28.firebaseapp.com",
    projectId: "tazas-5ff28"
});

var db = firebase.firestore();

db.collection("tazablanca").onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        tb.innerHTML = doc.data().cantidad;
        tbgeneral.innerHTML = doc.data().cantidad;
        blancaid.innerHTML = doc.id;
    });
});
db.collection("tazamagica").onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        tmag.innerHTML = doc.data().cantidad;
        tmaggeneral.innerHTML = doc.data().cantidad;
        magicaid.innerHTML = doc.id;
    });
});


function actualizarbd(id, nuevo) {
    nuevo = parseInt(nuevo);
    console.log(nuevo)
    if (id == 'biYM7Ggc6QkadVQCHN7Z') {
        var actualizar = db.collection("tazablanca").doc(id);
    } else {
        var actualizar = db.collection("tazamagica").doc(id);

    }
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