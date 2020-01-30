var socket = io();
socket.on('connect', function () {
    console.log('Server Connected');
});
socket.on('disconnect', function () {
    console.log('Lose connection');
});
socket.emit('sendMessage', {
    user: 'Alejandro',
    message: 'Hello World'
}, function (resp) {
    console.log('Server response ', resp);

});
socket.on('sendMessage', function (data) {
    console.log('Servidor: ',data);

});
