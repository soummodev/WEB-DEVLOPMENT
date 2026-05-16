import Button from "./assets/button/button.jsx"
import Student from "./assets/props/student.jsx"
function App() {
  return (
    <div>
      <Button />
      <Student name="soummo" age={30} isstudent={true} />
      <Student name="sanjay" age={30} isstudent={true} />
      <Student name="deb" age={30} isstudent={true} />
      <Student name="siva" age={30} isstudent={true} />
    </div>
  );

  
}

export default App
