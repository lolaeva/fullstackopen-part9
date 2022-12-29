import { CoursePart } from "../types";

interface ContentProps {
  courseParts: CoursePart[]
}

const Total = (props: ContentProps) => {
  return (
    <p className="total">
      Number of exercises {props.courseParts.reduce((total, part) => total + part.exerciseCount, 0)}
    </p>
  );
};

export default Total;
