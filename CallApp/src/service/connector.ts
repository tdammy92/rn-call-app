const {io} = require('socket.io-client');
const socket = io.connect(`http://192.168.100.19:4000`);

export default socket;
