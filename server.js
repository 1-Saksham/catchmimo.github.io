const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const rooms = {};

io.on('connection', socket => {
    socket.on('join', roomId => {
        if (!rooms[roomId]) rooms[roomId] = [];
        if (rooms[roomId].length < 5) {
            rooms[roomId].push(socket.id);
            socket.join(roomId);
            io.to(roomId).emit('user-joined', socket.id);
        } else {
            socket.emit('room-full');
        }
    });
    
    socket.on('disconnect', () => {
        // Handle user disconnect
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
