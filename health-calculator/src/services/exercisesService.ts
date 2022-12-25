interface ExerciseResult {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

const calculateExercises = (exerciseHours: number[], target: number): ExerciseResult => {
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter(e => e !== 0).length;
 
  const totalExerciseHours = exerciseHours.reduce((sum, e) => sum + e, 0);
  
  const average = totalExerciseHours / periodLength;
  const success = average > target;

  const proportion = average / target;
 
  const rating = proportion > 1 ? 3 : proportion < 1 && proportion > 0.75 ? 2 : 1;
  const ratingDescription = rating === 3 ? 'excellent' : rating === 2 ? 'average' : 'bad';

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };

};

export default {calculateExercises};