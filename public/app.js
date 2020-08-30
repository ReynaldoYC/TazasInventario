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

restar.addEventListener('click', (e) => {
    console.log('restar');
    let actualizar = e.target.parentElement.childNodes[3].textContent;
    actualizar = parseInt(actualizar);
    actualizar -= 1;
    let id = e.target.parentElement.childNodes[7].textContent;
    e.target.parentElement.childNodes[3].textContent = actualizar
    actualizarbd(id, actualizar);
    socket.emit('actualizarresta', {
        contador: actualizar
    })

});
restarmag.addEventListener('click', (e) => {
    console.log('restar');
    let actualizar = e.target.parentElement.childNodes[3].textContent;
    actualizar = parseInt(actualizar);
    actualizar -= 1;
    let id = e.target.parentElement.childNodes[7].textContent;
    e.target.parentElement.childNodes[3].textContent = actualizar
    actualizarbd(id, actualizar);
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
    actualizarbd(id, actualizar);
    socket.emit('actualizarsuma', {
        contador: actualizar
    })
});
sumarmag.addEventListener('click', (e) => {
    let actualizar = e.target.parentElement.childNodes[3].textContent;
    actualizar = parseInt(actualizar);
    actualizar += 1;
    let id = e.target.parentElement.childNodes[7].textContent;
    e.target.parentElement.childNodes[3].textContent = actualizar;
    actualizarbd(id, actualizar);
    socket.emit('actualizarsuma', {
        contador: actualizar
    })
});

// socket.on('actualizarresta', (data) => {
//     tb.innerHTML = data.contador
//     tbgeneral.innerHTML = data.contador
// });
// socket.on('actualizarsuma', (data) => {
//     tb.innerHTML = data.contador
//     tbgeneral.innerHTML = data.contador
// })