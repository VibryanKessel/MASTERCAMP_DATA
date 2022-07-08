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
const apikey = "abe928f429d0423382b3fa91f37bf0a5"

//Routes//
const loginRouter = require('./routes/login');
const clientRouter = require('./routes/client');
const registerRouter = require('./routes/register');
const monitoringRouter = require('./routes/dietMonitoring');
const recommandationRouter = require('./routes/recommandation');
const mealRouter = require('./routes/meal');

// Création serveur //
const app = express();

// Serveur config //
app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.use(session({ secret: 'grehjznejzkhgjrez', saveUninitialized: false, resave: false }))

app.use(express.urlencoded({ extended: false }))

// Connection base de donnéees //
const con = mySql.createConnection({
    host: 'localhost',
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    port: MYSQL_PORT,
    databases: BDD_NAME
});
con.connect();
con.query("USE " + BDD_NAME, (err) => {
    if (err) {
        throw err;
    };
});




// Configuration des routes //
app.use('/login', loginRouter(con));
app.use('/register', registerRouter(con));
app.use('/diet', monitoringRouter(con));
app.use('/recommandation', recommandationRouter(con,apikey));
app.use('/client', clientRouter(con));
app.use('/meal', mealRouter(con,apikey));

app.get('/deconnexion', (req, res) => {
    console.log(`${req.session.user.nom} vient de se deconnecter`);
    req.session.destroy();
    res.status(200).send("Deconnecté");
})

module.exports = app;