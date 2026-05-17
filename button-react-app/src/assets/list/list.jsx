import PropTypes from "prop-types";
// function List() {

//     const fruits = [
//       { id :1,name: "orange", calories: 96 },
//         {id: 2, name: "apple", calories: 45 },
//       { id : 3, name: "banana", calories: 105},
//       { id:4, name: "coconut", calories: 37 },
//     ];
//     const local = fruits.filter(fruit=> fruit.calories < 50)
//     const listitems = fruits.map((fruit) => (
//       <li key={fruit.id}>
//         {fruit.name}: &nbsp;
//         <b>{fruit.calories}</b>
//       </li>
//     ));

//     return (<onbeforeprintl>{listitems}</onbeforeprintl>)
// }
// export default List
// ALPHABETICAL (বর্ণানুক্রমিকভাবে সাজানো: A to Z)
//fruits.sort((a, b) => a.name.localeCompare(b.name));

// REVERSE ALPHABETICAL (উল্টো বর্ণানুক্রমিকভাবে সাজানো: Z to A)
//fruits.sort((a, b) => b.name.localeCompare(a.name));

// NUMERIC (সংখ্যানুক্রমিকভাবে ছোট থেকে বড় সাজানো)
//fruits.sort((a, b) => a.calories - b.calories);

// REVERSE NUMERIC (সংখ্যানুক্রমিকভাবে বড় থেকে ছোট সাজানো)
//fruits.sort((a, b) => b.calories - a.calories);
import "./list.css"
function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List
