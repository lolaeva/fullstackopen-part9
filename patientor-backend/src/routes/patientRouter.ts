import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  const patients = patientService.getNonSensitiveEntries();
  res.json(patients);
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, dateOfBirth, gender, occupation, ssn } = req.body;
    if (!name || !dateOfBirth || !gender || !occupation || !ssn) {
      res.status(400).json({ error: 'Fields missing' });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const newPatientEntry = patientService.addPatient(req.body);
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
