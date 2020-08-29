 const socket = io();
 let restar = document.getElementById('restar');
 let sumar = document.getElementById('sumar');

 let tb = document.getElementById('tb');
 let tbgeneral = document.getElementById('tb-general');


 restar.addEventListener('click', (e) => {
     let actualizar = e.target.parentElement.childNodes[3].textContent;
     actualizar -= 1;
     e.target.parentElement.childNodes[3].textContent = actualizar
     socket.emit('actualizarresta', {
         contador: actualizar
     })

 });

 sumar.addEventListener('click', (e) => {
     let actualizar = e.target.parentElement.childNodes[3].textContent;
     actualizar = parseInt(actualizar);
     actualizar += 1;
     e.target.parentElement.childNodes[3].textContent = actualizar
     socket.emit('actualizarsuma', {
         contador: actualizar
     })
 });

 socket.on('actualizarresta', (data) => {
     tb.innerHTML = data.contador
     tbgeneral.innerHTML = data.contador
 });
 socket.on('actualizarsuma', (data) => {
     tb.innerHTML = data.contador
     tbgeneral.innerHTML = data.contador
 })