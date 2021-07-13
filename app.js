const express = require('express');
const app = express();

app.use(express.static('public'));


const indexRouter = require('./routers/main');


app.use('/',indexRouter);


app.listen(3030,() => {
    console.log('Servidor funcionando')
});