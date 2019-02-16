import express from 'express';
import client from './db/connect'

const port = 3000;
class Api {
  constructor() {
    this.client = client;
    this.app = express();
    this.start();
  }
  start() {
    this.client.connect();
    this.app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`)
    })

  }
}

export default new Api();


// app.use('/', (req, res)=>{
//   res.send('dd088800ppp  555 12');
//
// });

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

