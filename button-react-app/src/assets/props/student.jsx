import styles from "./stu.module.css"
import propTypes from "prop-types"
function Student(props) {
    return (
        <div className={styles.stu}>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isstudent ? "YES" : "NO"}</p>
        </div>
    )
    //proptypes
    Student.propTypes = {
        name: propTypes.string,
        age: propTypes.number,
        isStudent :propTypes.bool,
        
          }
}
//default props
Student.defaultProps = {
    name: "guest",
    age: 0,
    isStudent:false,
    }

export default Student