import express from 'express';
import conect from './db/connect'
const app = express();
const port = 3000;

app.use('/', (req, res)=>{
  res.send('dd088800ppp  555 12');

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

