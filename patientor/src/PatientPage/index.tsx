import axios from "axios";
import { apiBaseUrl } from "../constants";

import { useStateValue } from "../state";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setSinglePatient } from "../state";
import { Patient } from "../types";

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Box, Typography } from "@material-ui/core";

const PatientPage = () => {
  const [{ singlePatient }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();
  const patient = singlePatient.patient;

  const fetchPatientData = async () => {
    const {data: patientData} = await axios.get<Patient>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${apiBaseUrl}/patients/${id}`
    );
    return patientData;
  };

  useEffect(() => {
    if(!singlePatient.patient || singlePatient.patient?.id !== id) {
      fetchPatientData()
      .then(patientData => {
        dispatch(setSinglePatient(patientData));
      })
      .catch(error => {
        console.log('error', error);
      });
    }
  }, []);
  


  

  if(!patient) return null;

  return (
    <>
      <Box display="flex" alignItems="center" marginTop={2}>
        <Typography variant="h5">
          {patient.name}
        </Typography>
        <span>
          {patient.gender === 'male' ? <MaleIcon /> : <FemaleIcon/>}
        </span>
      </Box>
      <div>
        <p>ssn: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
      </div>
    </>
  );
};

export default PatientPage;
