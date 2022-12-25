import express from 'express';
import bmiService from '../services/bmiService';

const router = express.Router();

router.get('/', (req,res) => {
  const {height, weight} = req.query;

  if(!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
    res.status(400).send({error: 'malformatted parameters'});
  }

  const bmiResult = bmiService.calculateBmi(Number(height), Number(weight));
  res.send(bmiResult);
});


export default router;