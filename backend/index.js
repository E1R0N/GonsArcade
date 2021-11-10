import cors from 'cors'
import morgan from 'morgan'

const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

const userRoutes = require("./routes/usersRoutes.js");
const loginRoutes = require("./routes/loginRoutes.js");
const costumerRoutes = require("./routes/costumerRoutes.js");
const classificationRoutes = require("./routes/classificationRoutes.js");

app.use(morgan('tiny'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost/proyectoMENN",{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;

if(!db){
    console.log("A la vrg")
}else{
    console.log("Relax bby")
}

var port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send("EUEUEU"))

app.use("/api", userRoutes);
app.use("/api", loginRoutes);
app.use("/api", costumerRoutes);
app.use("/api", classificationRoutes);

const history = require("connect-history-api-fallback");
app.use(history());

app.listen(port,()=>{
    console.log("localhost:",port)
});  