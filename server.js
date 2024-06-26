const server = require('./express')();
const { port } = require('./config');
require('dotenv').config();

server.listen(port, async()=>{
    console.log(`server is listening at http://localhost:${port}`);
})