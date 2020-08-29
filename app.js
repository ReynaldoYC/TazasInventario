const ws = new WebSocket('wss://reynaldoyc.github.io/TazasInventario/');
ws.onopen = () => {
    console.log('conectado');
};