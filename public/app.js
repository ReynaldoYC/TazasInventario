 io()
 let restar = document.getElementById('restar');
 const restar1 = (e) => {
     e.preventDefault();
     console.log('menos 1');
 }

 restar.addEventListener('click', restar1);