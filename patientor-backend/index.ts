import express, {Request} from 'express';
import cors from 'cors';
import diagnoseRouter from './src/routes/diagnoseRouter';
import patientRouter from './src/routes/patientRouter';
const app = express();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors<Request>());
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req,res) => {
  res.json({'pong': 'pong'});
});

app.use('/api/diagnoses', diagnoseRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});