const socket = io();

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
// let restarmetro = document.getElementById('restarmetro');
// let sumarmetro = document.getElementById('sumarmetro');

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

function SumaTotalMetalizada(dorada, rosada) {
    tmgeneral.innerHTML = dorada + rosada;
}

function SumaTotalVentana(negro, rojo) {
    tvgeneral.innerHTML = negro + rojo;
}

// socket.on('actualizarresta', (data) => {
//     tb.innerHTML = data.contador
//     tbgeneral.innerHTML = data.contador
// });
// socket.on('actualizarsuma', (data) => {
//     tb.innerHTML = data.contador
//     tbgeneral.innerHTML = data.contador
// })