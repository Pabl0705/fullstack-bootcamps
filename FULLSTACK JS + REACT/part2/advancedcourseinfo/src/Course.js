export const Course = ({ course }) => {
    return (
      <div>
        <h2>{course.name}</h2>
        <Content parts={course.parts} />
        <Footer parts={course.parts} />
      </div>
    );
  };

const Content = ({parts}) => {
    const partItems = parts.map(part => (
      <Part key={part.id} {...part} />
    ))
  
    return (
      <ul>
        {partItems}
      </ul>
    )
  }
  
const Part = ({name, exercises}) => {
    return <li>{name} {exercises}</li>
  }
  
const Footer = ({parts}) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);  
    return (
      <p>
        Total de ejercicios: {totalExercises}
      </p>
    )
  }