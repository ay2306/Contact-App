import express = require('express')
import path = require('path')
import bodyParser = require('body-parser')
import cors = require('cors')
import mongoose = require('mongoose')
import Mockgoose = require('mockgoose');
import * as basicRoutes from './routes/basic';
require('dotenv').config();
export class App{
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
    public databaseSetup():any{
        return new Promise((resolve,reject)=>{
            if(process.env.NODE_ENV !== 'production'){
                const mockgoose = new Mockgoose.Mockgoose(mongoose);
                mockgoose.prepareStorage()
                .then(()=>{
                    mongoose.connect(process.env.dbpath,{
                        useNewUrlParser: true,
                        useCreateIndex: true,
                        useUnifiedTopology: true
                    })
                    .then((res,err)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve();
                        }
                    });
                })
            }else{
                mongoose.connect(process.env.dbpath,{
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true
                })
                .then((res,err)=>{
                    if(err){
                        reject(err);
                    }else{
                        console.log(`Connected to database at port: ${process.env.dbPORT}`)
                        resolve();
                    }
                });
            }
        })
    }
    public disconnectDatabase():any{
        return mongoose.disconnect();
    }
}