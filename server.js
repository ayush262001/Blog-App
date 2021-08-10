import express from 'express';
import Connection from './Database/Db.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';



const app = express();

app.use(express.json());
app.use(cors());


Connection();

app.use("/", router);



app.listen(9000, ()=>{
    console.log("server is running on port 9000");
});