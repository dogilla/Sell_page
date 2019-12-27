const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
const port = 3000;

const htmls = __dirname + '/static/htmls/'

app.use(express.static(path.join(__dirname, 'static'))); 

app.use(function(req, res, next) {
    console.log('URL' + req.url);
    next();
});

router.get('/', (req, res) => {
    res.sendFile(path.join(htmls+'inicio.html'))
});

app.use('/', router);
app.listen(process.env.port || port);
console.log('Running at port' + port.toString());