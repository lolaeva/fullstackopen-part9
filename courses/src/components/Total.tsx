import { ContentProps } from '../types';

const Total = (props: ContentProps) => {
  return (
    <p>
      Number of exercises {props.courseParts.reduce((total, part) => total + part.exerciseCount, 0)}
    </p>
  );
};

export default Total;
