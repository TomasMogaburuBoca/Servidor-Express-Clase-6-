const express = require ('express');
const app = express();

app.get ('/', (req, res) => {
    res.send('Hola mundo')
})
app.get ('/user', (req, res) => {
    res.send('Servidor de usuarios')
})
app.get ('/fyh', (req, res) => {
    res.send({fyh: new Date().toLocaleString()})
})

const PORT = process.env.PORT || 8080;

const server = app.listen (PORT, ()=>{console.log('servidor OK');})
server.on ('error', error => console.log(error))