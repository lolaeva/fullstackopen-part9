import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  console.log('GET');
  const patients = patientService.getPatients();
  res.json(patients);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const patient = patientService.getPatientById(id);
  if (patient) {
    res.json(patient);
  } else {
    res.status(404).json({ error: 'not found' });
  }
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
    const newPatientEntry = patientService.addPatient(toNewPatientEntry(req.body));
    if (
      !newPatientEntry.name ||
      !newPatientEntry.dateOfBirth ||
      !newPatientEntry.gender ||
      !newPatientEntry.occupation ||
      !newPatientEntry.ssn
    ) {
      res.status(400).json({ error: 'Fields missing' });
    } else {
      res.json(newPatientEntry);
    }
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
