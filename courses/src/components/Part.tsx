import { CoursePart } from '../types';

const assertNever = (value: never): never => {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};

interface PartProps {
  part: CoursePart;
}

const MainPart = ({ part }: PartProps) => {
  return (
    <>
      <p className="part-main">
        {part.name} {part.exerciseCount}
      </p>
    </>
  );
};



const Part = ({ part }: PartProps) => {
  switch (part.type) {
    case 'normal':
      return (
        <>
          <MainPart part={part} />
          {part.description && <p className="part-description">{part.description}</p>}
        </>
      );
    case 'groupProject':
      return (
        <>
          <MainPart part={part} />
          <p>Group exercises: {part.groupProjectCount}</p>
        </>
      );
    case 'submission':
      return (
        <>
          <MainPart part={part} />
          <p>Submit to: {part.exerciseSubmissionLink}</p>
        </>
      );
    case 'special':
      return (
        <>
          <MainPart part={part} />
          <p>Requirements: {part.requirements.join(', ')}</p>
        </>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
