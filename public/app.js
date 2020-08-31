const socket = io();
var tazafondo = db.collection("tazafondoborde").doc("PP5kNItxcyD3qawu4g01");
var tazaborde = db.collection("tazaborde").doc("a39IWPu5Abhgtcof5nvb");

// card blanca
let restar = document.getElementById('restar');
let sumar = document.getElementById('sumar');
let tb = document.getElementById('tb');
let tbgeneral = document.getElementById('tb-general');
let blancaid = document.getElementById('blancaid');

// card magica
let tmag = document.getElementById('tmag');
let tmaggeneral = document.getElementById('tmag-general');
let magicaid = document.getElementById('magicaid');
let restarmag = document.getElementById('restarmag');
let sumarmag = document.getElementById('sumarmag');


// card metalizada
let tmgeneral = document.getElementById('tm-general');
let metalizadaid = document.getElementById('metalizadaid');
let restarmetdo = document.getElementById('restarmetdo');
let sumarmetdo = document.getElementById('sumarmetdo');
let restarmetro = document.getElementById('restarmetro');
let sumarmetro = document.getElementById('sumarmetro');

//card ventana
let tvgeneral = document.getElementById('tv-general');
let ventanaid = document.getElementById('ventanaid');
let restartvrojo = document.getElementById('restartvrojo');
let sumartvrojo = document.getElementById('sumartvrojo');
let restartvnegro = document.getElementById('restartvnegro');
let sumartvnegro = document.getElementById('sumartvnegro');

// taza asa fondo
let tafgeneral = document.getElementById('taf-general');
let fondoid = document.getElementById('fondoid');

// taza asa borde
let tabgeneral = document.getElementById('tab-general');
let bordeid = document.getElementById('bordeid');
let sumartafamarilla = document.getElementById('sumartafamarilla');

// botones blancas
restar.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[3].textContent;
    actualizar = parseInt(actualizar);
    actualizar -= 1;
    let id = e.target.parentElement.childNodes[7].textContent;
    e.target.parentElement.childNodes[3].textContent = actualizar
    actualizarbd(id, actualizar, 'cantidad');
    socket.emit('actualizarresta', {
        contador: actualizar
    })
});
sumar.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[3].textContent;
    actualizar = parseInt(actualizar);
    actualizar += 1;
    let id = e.target.parentElement.childNodes[7].textContent;
    e.target.parentElement.childNodes[3].textContent = actualizar;
    actualizarbd(id, actualizar, 'cantidad');
    socket.emit('actualizarsuma', {
        contador: actualizar
    })
});
// botones magicas
restarmag.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[3].textContent;
    actualizar = parseInt(actualizar);
    actualizar -= 1;
    let id = e.target.parentElement.childNodes[7].textContent;
    e.target.parentElement.childNodes[3].textContent = actualizar
    actualizarbd(id, actualizar, 'cantidad');
    socket.emit('actualizarresta', {
        contador: actualizar
    })

});
sumarmag.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[3].textContent;
    actualizar = parseInt(actualizar);
    actualizar += 1;
    let id = e.target.parentElement.childNodes[7].textContent;
    e.target.parentElement.childNodes[3].textContent = actualizar;
    actualizarbd(id, actualizar, 'cantidad');
    socket.emit('actualizarsuma', {
        contador: actualizar
    })
});
// botones metalizadas
sumarmetdo.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[5].textContent;
    actualizar = parseInt(actualizar);
    actualizar += 1;
    let id = e.target.parentElement.parentElement.childNodes[1].textContent;
    e.target.parentElement.childNodes[5].textContent = actualizar;
    actualizarbd(id, actualizar, 'dorada');
    socket.emit('actualizarsuma', {
        contador: actualizar
    })
});
restarmetdo.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[5].textContent;
    actualizar = parseInt(actualizar);
    actualizar -= 1;
    let id = e.target.parentElement.parentElement.childNodes[1].textContent;
    e.target.parentElement.childNodes[5].textContent = actualizar
    actualizarbd(id, actualizar, 'dorada');
    socket.emit('actualizarresta', {
        contador: actualizar
    })
});
restarmetro.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[5].textContent;
    actualizar = parseInt(actualizar);
    actualizar -= 1;
    let id = e.target.parentElement.parentElement.childNodes[1].textContent;
    e.target.parentElement.childNodes[5].textContent = actualizar
    actualizarbd(id, actualizar, 'rosada');
    socket.emit('actualizarresta', {
        contador: actualizar
    })

});
sumarmetro.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[5].textContent;
    actualizar = parseInt(actualizar);
    actualizar += 1;
    let id = e.target.parentElement.parentElement.childNodes[1].textContent;
    e.target.parentElement.childNodes[5].textContent = actualizar;
    actualizarbd(id, actualizar, 'rosada');
    socket.emit('actualizarsuma', {
        contador: actualizar
    })
});
// taza ventana
sumartvrojo.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[5].textContent;
    actualizar = parseInt(actualizar);
    actualizar += 1;
    let id = e.target.parentElement.parentElement.childNodes[1].textContent;
    e.target.parentElement.childNodes[5].textContent = actualizar;
    actualizarbd(id, actualizar, 'rojo');
    socket.emit('actualizarsuma', {
        contador: actualizar
    })
});
restartvrojo.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[5].textContent;
    actualizar = parseInt(actualizar);
    actualizar -= 1;
    let id = e.target.parentElement.parentElement.childNodes[1].textContent;
    e.target.parentElement.childNodes[5].textContent = actualizar
    actualizarbd(id, actualizar, 'rojo');
    socket.emit('actualizarresta', {
        contador: actualizar
    })
});
restartvnegro.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[5].textContent;
    actualizar = parseInt(actualizar);
    actualizar -= 1;
    let id = e.target.parentElement.parentElement.childNodes[1].textContent;
    e.target.parentElement.childNodes[5].textContent = actualizar
    actualizarbd(id, actualizar, 'negro');
    socket.emit('actualizarresta', {
        contador: actualizar
    })

});
sumartvnegro.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[5].textContent;
    actualizar = parseInt(actualizar);
    actualizar += 1;
    let id = e.target.parentElement.parentElement.childNodes[1].textContent;
    e.target.parentElement.childNodes[5].textContent = actualizar;
    actualizarbd(id, actualizar, 'negro');
    socket.emit('actualizarsuma', {
        contador: actualizar
    })
});
tazafondo.get().then(function(doc) {
    if (doc.exists) {
        let data = doc.data();
        let contador = 0;
        for (const key in data) {
            coloresasafondo.innerHTML += `
            <div class="card-body d-flex justify-content-center align-items-baseline">
                <p class="mr-4">${key.charAt(0).toUpperCase() + key.slice(1)}</p>
                <button class="btn btn-warning" id="restartaf${key}">-</button>
                <p class="ml-4 mr-4" id="taf${key}">${data[key]}</p>
                <button class="btn btn-warning" id="sumartaf${key}">+</button>
            </div>`;
            contador += data[key];
        }
        fondoid.innerHTML = doc.id;
        tafgeneral.innerHTML = contador;
        let restartafamarillo = document.getElementById('restartafamarillo');
        let sumartafamarillo = document.getElementById('sumartafamarillo')
        let restartafanaranjado = document.getElementById('restartafanaranjado');
        let sumartafanaranjado = document.getElementById('sumartafanaranjado')
        console.log(tafgeneral)

        restartafamarillo.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'amarillo');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tafamarillo'
            })
        });
        sumartafamarillo.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'amarillo');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tafamarillo'
            })
        });
        restartafanaranjado.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'anaranjado');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tafanaranjado'
            })
        });
        sumartafanaranjado.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'anaranjado');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tafanaranjado'
            })
        });
        restartafazul.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'azul');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tafazul'
            })
        });
        sumartafazul.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'azul');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tafazul'
            })
        });
        restartafceleste.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'celeste');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tafceleste'
            })
        });
        sumartafceleste.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'celeste');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tafceleste'
            })
        });
        restartafnegra.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'negra');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tafnegra'
            })
        });
        sumartafnegra.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'negra');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tafnegra'
            })
        });
        restartafrojo.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'rojo');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tafrojo'
            })
        });
        sumartafrojo.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'rojo');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tafrojo'
            })
        });
        restartafrosada.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'rosada');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tafrosada'
            })
        });
        sumartafrosada.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'rosada');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tafrosada'
            })
        });
        restartafverde.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'verde');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tafverde'
            })
        });
        sumartafverde.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = fondoid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'verde');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tafverde'
            })
        });
    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
tazaborde.get().then(function(doc) {
    if (doc.exists) {
        let data = doc.data();
        let contador = 0;
        for (const key in data) {
            coloresasaborde.innerHTML += `
            <div class="card-body d-flex justify-content-center align-items-baseline">
                <p class="mr-4">${key.charAt(0).toUpperCase() + key.slice(1)}</p>
                <button class="btn btn-warning" id="restartab${key}">-</button>
                <p class="ml-4 mr-4" id="tab${key}">${data[key]}</p>
                <button class="btn btn-warning" id="sumartab${key}">+</button>
            </div>`;
            contador += data[key];
        }
        bordeid.innerHTML = doc.id;
        tabgeneral.innerHTML = contador;
        let restartabamarillo = document.getElementById('restartabamarillo');
        let sumartabamarillo = document.getElementById('sumartabamarillo')

        restartabamarillo.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'amarillo');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tabamarillo'
            })
        });
        sumartabamarillo.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'amarillo');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tabamarillo'
            })
        });
        restartabceleste.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'celeste');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tabceleste'
            })
        });
        sumartabceleste.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'celeste');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tabceleste'
            })
        });
        restartabnegro.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'negro');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tabnegro'
            })
        });
        sumartabnegro.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'negro');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tabnegro'
            })
        });
        restartabrojo.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'rojo');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tabrojo'
            })
        });
        sumartabrojo.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'rojo');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tabrojo'
            })
        });
        restartabrosado.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'rosado');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tabrosado'
            })
        });
        sumartabrosado.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'rosado');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tabrosado'
            })
        });
        restartabverde.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar -= 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar
            actualizarbd(id, actualizar, 'verde');
            socket.emit('actualizarresta', {
                id: id,
                actualizar: actualizar,
                clave: 'tabverde'
            })
        });
        sumartabverde.addEventListener('click', (e) => {
            let actualizar = e.target.parentElement.childNodes[5].textContent;
            actualizar = parseInt(actualizar);
            actualizar += 1;
            let id = bordeid.textContent;
            e.target.parentElement.childNodes[5].textContent = actualizar;
            actualizarbd(id, actualizar, 'verde');
            socket.emit('actualizarsuma', {
                id: id,
                actualizar: actualizar,
                clave: 'tabverde'
            })
        });
    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

function SumaTotalMetalizada(dorada, rosada) {
    tmgeneral.innerHTML = dorada + rosada;
}

function SumaTotalVentana(negro, rojo) {
    tvgeneral.innerHTML = negro + rojo;
}

socket.on('actualizarresta', (data) => {
    let id = data.id;
    if (id == 'PP5kNItxcyD3qawu4g01') {
        document.getElementById(data.clave).innerHTML = data.actualizar;
    }
    if (id == 'a39IWPu5Abhgtcof5nvb') {
        document.getElementById(data.clave).innerHTML = data.actualizar;
    }
});
socket.on('actualizarsuma', (data) => {
    let id = data.id;
    if (id == 'PP5kNItxcyD3qawu4g01') {
        document.getElementById(data.clave).innerHTML = data.actualizar;
    }
    if (id == 'a39IWPu5Abhgtcof5nvb') {
        document.getElementById(data.clave).innerHTML = data.actualizar;
    }
})