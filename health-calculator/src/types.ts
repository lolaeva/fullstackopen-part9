export type BmiResult = 'underweight' | 'normal weight' | 'overweight'  | 'obese' | 'none';

export interface BmiObject {
  height: number
  weight: number
  bmi: BmiResult
}