import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import handlebars from "express-handlebars";
import passport from "passport";

import __dirname from "./utils.js";
import { authRouter } from "./routes/auth.routes.js";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
import { viewsRouter }  from "./routes/views.routes.js";
import  { sessionRouter }  from "./routes/sessions.routes.js";
import inicializePassport from "./config/passport.config.js";

import { options } from "./config/config.js";
import { dbConection } from "./config/dbConection.js";

const app = express();

dbConection();

const server = app.listen(options.server.port, ()=>{
    console.log('Servidor todavia funcionando en el puerto 8080');
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));


app.use(session({
    store: new MongoStore({
        mongoUrl: options.mongo.url,
        //ttl:3600
    }),
    secret:"CoderSecret",
    resave:false,
    saveUninitialized:false
}))

inicializePassport()
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/sessions', sessionRouter); 
app.use('/api/auths', authRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

