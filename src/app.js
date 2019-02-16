import express from 'express';
const app = express();
const port = 3000;

app.use('/', (req, res, next)=>{
  res.send('dd000ppp');

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

