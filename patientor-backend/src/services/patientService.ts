import { Patient, PublicPatient, NewPatientEntry } from '../types';
import patientsData from '../../data/patients';
import { v1 as uuid } from 'uuid';

const patients: Array<Patient> = patientsData;

const getPatients = (): PublicPatient[] => {
  console.log('patients', patients);
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const getPatientById = (id: string): Patient | undefined => {
  let patient = patients.find((p) => p.id === id);

  if (patient && !patient?.entries) {
    patient = { ...patient, entries: [] };
  }
  return patient;
};

const addPatient = (patient: NewPatientEntry): Patient => {
  const id = uuid();
  const newPatientEntry = {
    id: id,
    entries: [],
    ...patient,
  };
  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  getPatientById,
  addPatient,
};
