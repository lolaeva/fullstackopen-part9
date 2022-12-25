/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express from 'express';
import exercisesService from '../services/exercisesService';

const router = express.Router();

router.post('/', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {daily_exercises, target} = req.body;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nonNumberDays = daily_exercises.filter((n:any) => isNaN(Number(n)));

  if(!daily_exercises || !target) {
    res.status(400).send({error: 'parameters missing'});
  }
  else if(isNaN(Number(target)) || nonNumberDays.length > 0) {
    res.status(400).send({error: 'malformatted parameters'});
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const exerciseResult = exercisesService.calculateExercises(daily_exercises, Number(target));

  res.send(exerciseResult);
});

export default router;