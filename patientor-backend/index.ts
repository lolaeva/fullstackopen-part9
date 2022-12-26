import express from 'express';
import diagnoseRouter from './src/routes/diagnosesRouter';
const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req,res) => {
  res.send('pong');
});

app.use('/api/diagnoses', diagnoseRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});