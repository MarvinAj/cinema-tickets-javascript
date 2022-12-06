import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
