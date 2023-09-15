import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './route.js';
import connectionDB from './config.js';
var app = express();
dotenv.config();

const PORT=process.env.PORT;
const HOST=process.env.HOST;

connectionDB.connect((error) => {
    if(error) throw error;
    console.log(`Connected With DB ${process.env.DB_DATABASE}`);
 });

app.get('/', function (req, res) {
    res.send('Hello World');
 });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.use('/', router);

app.listen(8090, (error) => {
    if (!error) 
        console.log(`application running on http://${HOST}:${PORT}`);
    else
        console.log('In error block', error);
 });