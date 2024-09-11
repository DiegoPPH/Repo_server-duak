const express = require('express');
const cors =require('cors');

class server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.middlewares();
        this.routes();
    }

    routes(){
        this.app.use("/formulario", require('../routes/form.routes.js'));
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen(){
        this.server.listen(this.port, () =>{
            console.log("Server running on port", this.port);
    
        })
    }
}

module.exports = server;
