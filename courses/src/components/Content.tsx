import { CoursePart } from "../types";
import Part from "./Part";

interface ContentProps {
  courseParts: CoursePart[]
}

// eslint-disable-next-line react/prop-types
const Content = ({courseParts}: ContentProps) => {
  courseParts.forEach(part => {
    switch(part.name) {
      case 'Backend development':

    }
  })
  return (
    <>
      {courseParts.map((part) => (
        <Part key={part.name} part={part}/>
      ))}
    </>
  );
};

export default Content;
