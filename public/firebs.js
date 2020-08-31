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
db.collection("tazametalizada").onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        let dorada = doc.data().dorada;
        let rosada = doc.data().rosada;
        tmDorada.innerHTML = dorada;
        tmRosada.innerHTML = rosada;
        metalizadaid.innerHTML = doc.id;
        SumaTotalMetalizada(dorada, rosada);
    });
});
db.collection("tazaventana").onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        let negro = doc.data().negro;
        let rojo = doc.data().rojo;
        tvNegro.innerHTML = negro;
        tvRojo.innerHTML = rojo;
        ventanaid.innerHTML = doc.id;
        ventanaid.value = doc.id;
        SumaTotalVentana(negro, rojo);
    });
});
db.collection("tazafondoborde").onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {

        let data = doc.data();
        let contador = 0;
        fondoid.innerHTML = doc.id;
        for (const key in data) {
            let abr = 'taf' + key;
            contador += data[key];
            abr.innerHTML = data[key];
        }
        tafgeneral.innerHTML = contador;
    });
});
db.collection("tazaborde").onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.data())
        let data = doc.data();
        let contador = 0;
        bordeid.innerHTML = doc.id;
        for (const key in data) {
            let abr = 'taf' + key;
            contador += data[key];
            abr.innerHTML = data[key];
        }
        tabgeneral.innerHTML = contador;
    });
});

function actualizarbd(id, nuevo, key) {
    let clave = key;
    nuevo = parseInt(nuevo);
    console.log(id, clave, nuevo)
    if (id == 'biYM7Ggc6QkadVQCHN7Z') {
        var actualizar = db.collection("tazablanca").doc(id);
    }
    if (id == 'wnXwtX3nohAWIyNhRJPI') {
        var actualizar = db.collection("tazamagica").doc(id);
    }
    if (id == 'JLgiGIJ85UbrzQejmdQK') {
        var actualizar = db.collection("tazametalizada").doc(id);
    }
    if (id == 'WI3id1fCym4kjeeoqGfJ') {
        var actualizar = db.collection("tazaventana").doc(id);
    }
    if (id == 'PP5kNItxcyD3qawu4g01') {
        var actualizar = db.collection("tazafondoborde").doc(id);
    }
    if (id == 'a39IWPu5Abhgtcof5nvb') {
        var actualizar = db.collection("tazaborde").doc(id);
    }
    return actualizar.update({
            [clave]: nuevo
        })
        .then(function() {
            console.log("Se actualizó la base de datos!");
        })
        .catch(function(error) {
            console.error("Error: ", error);
        })
}