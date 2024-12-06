const express = require('express');
const cors = require('cors');
const app = express();
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const authRouter = require('./routes/transaction_waterUsage');

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())


//Global error handler
app.use((err, res, req, next) => {
  err.statuCode = err.statuCode || 500;
  err.status = err.status || 'error';

  res.status(err.statuCode).json({
      status: err.status,
      message: err.message,
  });
});


//routers
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


//app.get('/', (req, res) => {
  //  res.send('Hello World')
//})

const server = () => {
    db()
   app.listen(PORT, () => {
     console.log('listening to port: ', PORT);
   })
}

server();