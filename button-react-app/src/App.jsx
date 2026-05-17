import Button from "./assets/button/button.jsx"
import Student from "./assets/props/student.jsx"
import User from "./assets/crendering/user.jsx"
import List from "./assets/list/list.jsx"
function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];
  return (
    <>
      <div>
        <Button />
        <Student name="soummo" age={30} isstudent={true} />
        <Student name="sanjay" age={30} isstudent={true} />
        <Student name="deb" age={30} isstudent={true} />
        <Student name="siva" age={30} isstudent={true} />
        <Student name="siva" />
      </div>
      <User isLoggedin={true} username="soummo" />
      {/* {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null} */}
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      ) }
    </>
  );

  
}

export default App
