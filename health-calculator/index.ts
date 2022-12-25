import express from 'express';
import bmiRouter from './src/routes/bmi';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.use('/bmi', bmiRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});