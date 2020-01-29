const { io } = require('../server');
io.on('connection', (client) => {
    console.log('User connected');
    client.emit('sendMessage', {
        user: 'Administrator',
        message: 'Welcome to app'
    })
    client.on('disconnect', () => {
        console.log('User disconnected');
    });
    client.on('sendMessage', (data, callback) => {
        console.log(data);
        if (data.user) {
            callback({
                resp: 'All OK'
            });
        } else {
            callback({
                resp: 'I AM SORRY'
            });
        }
    });
})