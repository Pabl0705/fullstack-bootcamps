const Title = ({course}) => {
  // const {course} = props
  // return <h1>{course}<h1>
  return <h1>{course.name}</h1>
}

const Content = ({parts}) => {
  return (
    <div>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
    </div>
  )
}

const Footer = ({total}) => {
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Title course={course}/>
      <Content parts={course.parts}/>
      <Footer total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App