const ws = new WebSocket('wss://stupefied-brown-bf83b2.netlify.app/');
ws.onopen = () => {
    console.log('conectado');
};
ws.onerror = (e) => {
    console.log(e);
};