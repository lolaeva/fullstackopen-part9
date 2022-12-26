import { Diagnose } from "../types";
import diagnosesData from '../../data/diagnoses.json';

const diagnoses: Array<Diagnose> = diagnosesData as Array<Diagnose>;

const getAll = () => {
  return diagnoses;
};

export default {
  getAll
};