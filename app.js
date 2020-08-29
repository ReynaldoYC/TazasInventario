const ws = new WebSocket('ws://reynaldoyc.github.io/TazasInventario');
ws.onopen = () => {
    console.log('conectado');
};