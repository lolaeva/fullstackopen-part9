interface HeightWeight {
  height: number
  weight: number
}

type BmiResult = 'underweight' | 'normal weight' | 'overweight'  | 'obese' | 'none';

const parseArgumentsBmi = (args: Array<string>): HeightWeight => {
  if(args.length < 4) throw new Error('Not enough arguments');
  if(args.length > 4) throw new Error('Too many arguments');

  if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    };
  }
  else {
    throw new Error('Provided numbers were not numbers!');
  }
};


const calculateBmi = (height: number, weight:number): BmiResult => {
  if (weight === 0 || height === 0)
    throw new Error('Weight or height cannot be 0');
  if(isNaN(Number(height)) || isNaN(Number(weight)))
    throw new Error('Weight or height must be numbers');
  
  const o: number = Math.round(weight / Math.pow(height/100, 2) * 100) / 100;

  switch(true) {
    case (o < 18.5):
      return 'underweight';
    case (o >= 18.5 && o < 25):
      return 'normal weight';
    case (o >= 25 && o < 30):
        return 'overweight';
    case (o >= 30):
      return 'obese';
    default:
      return 'none';
  }
};

try {
  const { height, weight } = parseArgumentsBmi(process.argv);
  console.log(calculateBmi(height, weight));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
