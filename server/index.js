import express from 'express';
const add = require('./app')

// import server from './server'

const PORT = process.env.PORT || 8008;
const router = express.Router();
const app = express();

  
  // app.use('/',router)
  // require('./server')(router)
  
  app.get('/*', (req, res) => {
    add.add(req ,res)
  });

  app.use(express.static('./build'));


  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
  