const ws = new WebSocket('ws://http://127.0.0.1:5500/index.html');
ws.onopen = () => {
    console.log('conectado');
};