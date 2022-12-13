const express = require('express')
const log = require('morgan')
const cors = require('cors')
const app = express()

PORT = process.env.PORT || 7070,
NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);
app.use(cors());
app.use(log('tiny'));
// parse application/json
app.use(express.json());
// parse raw text
app.use(express.text());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



require('./router')(app);


  // catch 404
  app.use((req, res, next) => {
    // log.error(`Error 404 on ${req.url}.`);
    res.status(404).send({ status: 404, error: 'Not found' });
});

// catch errors
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const msg = err.error || err.message;
    log.error(`Error ${status} (${msg}) on ${req.method} ${req.url} with payload ${req.body}.`);
    res.status(status).send({ status, error: msg });
});



app.listen(PORT, () => {
    console.log(`💪 Server started on Port ${app.get('port')} | Environment : ${app.get('env')}`
    );
})