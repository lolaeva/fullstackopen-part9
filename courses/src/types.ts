type SingleCourse = {
  name: string;
  exerciseCount: number;
};

export interface ContentProps {
  courseParts: SingleCourse[];
}

export interface HeaderProps {
  title: string;
}