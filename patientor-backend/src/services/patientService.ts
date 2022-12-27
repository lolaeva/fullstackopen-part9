import { Patient, NonSensitivePatientEntry, NewPatientEntry } from '../types';
import patientsData from '../../data/patients';
import { v1 as uuid } from 'uuid';

const patients: Array<Patient> = patientsData;

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

const addPatient = (patient: NewPatientEntry): Patient => {
  const id = uuid();
  const newPatientEntry = {
    id: id,
    ...patient
  };
  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getAll,
  getNonSensitiveEntries,
  addPatient
};
