import express from "express";
const app = express.Router();

app.get('/register', (req, res) => {

  res.send('teste')

});
export default app;
