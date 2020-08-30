const path = require('path');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})


// web services
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket) => {
    console.log('nueva conexion', socket.id);

    socket.on('actualizarresta', (data) => {
        console.log('console', data);
        io.sockets.emit('actualizarresta', data);

    });
    socket.on('actualizarsuma', (data) => {
        io.sockets.emit('actualizarsuma', data);
    })
})