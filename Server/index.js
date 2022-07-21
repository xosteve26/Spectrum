const express = require('express')
const dotenv = require('dotenv')
const cors = require("cors")
const app=express();

dotenv.config({ path: './config/config.env' });
var PORT=process.env.PORT || 8000;

app.use(express.json())

const whitelist = ["http://localhost:3000"]
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))

app.use('/', require('./routes/index'));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})