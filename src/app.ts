import express = require('express')
import path = require('path')
import bodyParser = require('body-parser')
import cors = require('cors')
import mongoose = require('mongoose')
import * as basicRoutes from './routes/basic';
class App{
    public app;
    public basicRoutes;
    constructor(){
        this.app = express();
        this.setup();
        this.basicRoutes = new basicRoutes.basicRoutes();
        this.basicRoutes.routes(this.app);
    }
    private setup(): void{
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.static(path.join(__dirname,'../public')));
    }
}

export default new App().app;