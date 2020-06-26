const express = require('express');
const rootRouter = express.Router();
const routerV1 = require('./v1/index');
rootRouter.use('/api/v1', routerV1);

rootRouter.get('/*', (req, res)=>{
    res.send({
        status: 404,
        message: "OOH, wrong URL"
    });
})
module.exports = rootRouter;