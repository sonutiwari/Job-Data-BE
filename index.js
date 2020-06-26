const express = require('express');
const dotenv = require('dotenv');
const rootRouter = require('./routers/index');
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', rootRouter)
app.listen(PORT, (err)=>{
    if (err) console.log(err);
    else console.log(`App is running on PORT: ${PORT}`);
})