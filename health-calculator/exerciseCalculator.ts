
interface TargetDailyExercises {
  exerciseHours: number[]
  target: number
}

interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

const parseArgumentsExercises = (args: Array<string>): TargetDailyExercises => {
  if(args.length < 4) throw new Error('Not enough arguments');
  let i = 3;
  const allExercises = [];

  while(!isNaN(Number(args[i]))) {
    allExercises.push(Number(args[i]));
    i += 1;
  }

  if(!isNaN(Number(args[2]))) {
    return {
      exerciseHours: [...allExercises],
      target: Number(args[2])
    };
  }
  else {
    throw new Error('Provided numbers were not numbers!');
  }
};


const calculateExercises = (exerciseHours: number[], target: number): Result => {
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


try {
  const { exerciseHours, target} = parseArgumentsExercises(process.argv);
  console.log(calculateExercises(exerciseHours, target));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}