const ws = new WebSocket('wss://app.netlify.com/sites/inventariotazas/');
ws.onopen = () => {
    console.log('conectado');
};
ws.onerror = (e) => {
    console.log(e);
};