const express = require('express')
const app = express()
const Router = require('./routes/routes')
const cors = require('cors')
app.use(cors())
require('dotenv').config()

app.use(express.json())


app.use('/',Router)
app.listen(process.env.PORT, ()=>{
    console.log("Servido on");
})