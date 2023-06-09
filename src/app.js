import express  from 'express';
import routes  from './routes';
import mongoose from 'mongoose';


class App{

    constructor(){
        this.server = express()
        mongoose.set('strictQuery', true)
        mongoose.connect('mongodb+srv://deivid:devhouse@devhouse.ldkjz2o.mongodb.net/devhouse?retryWrites=true&w=majority',{
        
            
        })
   
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)
    }

}

export default new App().server