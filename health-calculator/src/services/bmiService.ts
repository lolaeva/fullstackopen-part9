import { BmiObject } from "../types";

const calculateBmi = (height: number, weight:number): BmiObject => {
  if (weight === 0 || height === 0)
    throw new Error('Weight or height cannot be 0');
  if(isNaN(Number(height)) || isNaN(Number(weight)))
    throw new Error('Weight or height must be numbers');
  
  const o: number = Math.round(weight / Math.pow(height/100, 2) * 100) / 100;
  const hw = {height: height, weight: weight};

  switch(true) {
    case (o < 18.5):
      return {...hw, bmi: 'underweight'};
    case (o >= 18.5 && o < 25):
      return {...hw, bmi: 'normal weight'};
    case (o >= 25 && o < 30):
        return {...hw, bmi: 'overweight'};
    case (o >= 30):
      return {...hw, bmi: 'obese'};
    default:
      return {...hw, bmi: 'none'};
  }
};

export default {calculateBmi};