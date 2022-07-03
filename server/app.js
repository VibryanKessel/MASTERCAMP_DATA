const express = require('express');
const session = require('express-session');
const cors = require('cors');
const mySql = require('mysql');

// Utils//

const BDD_NAME = "mastercamp";
const MYSQL_PORT = '8080';
const MYSQL_USER = "root";
const MYSQL_PASSWORD = "";

const AI_SERVER_URL = ""

//Routes//
const loginRouter=require('./routes/login');
const registerRouter=require('./routes/register');
const monitoringRouter=require('./routes/dietMonitoring');
const recommandationRouter=require('./routes/recommandation');

// Création serveur //
const app=express();

// Serveur config //
app.use(cors());

app.use(express.json())

app.use(session({ secret: 'grehjznejzkhgjrez', saveUninitialized: false, resave: false }))

app.use(express.urlencoded({ extended: false }))

// Connection base de donnéees //
const con=mySql.createConnection({
    host:'localhost',
    user:MYSQL_USER,
    password:MYSQL_PASSWORD,
    port: MYSQL_PORT,
    databases: BDD_NAME    
});
con.connect();
con.query("USE "+ BDD_NAME, (err) => {
    if(err) {
        throw err;
    };
});
// Configuration des routes //
app.use('/login',loginRouter(con));
app.use('/register',registerRouter(con));
app.use('/dietMonitoring',monitoringRouter(con));
app.use('/recommandation',recommandationRouter(con));

app.get('/deconnexion',(req,res)=>{
    console.log(`${req.session.user.nom} vient de se deconnecter`);
    req.session.destroy();
    res.status(200).send("Deconnecté");
})

module.exports=app;