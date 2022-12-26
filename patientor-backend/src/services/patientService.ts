import { Patient, NonSensitivePatientEntry } from '../types';
import patientsData from '../../data/patients.json';

const patients: Array<Patient> = patientsData as Array<Patient>;

const getAll = (): Patient[] => {
  return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getAll,
  getNonSensitiveEntries,
};
