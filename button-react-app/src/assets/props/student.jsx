import styles from "./stu.module.css"
function Student(props) {
    return (
        <div className={styles.stu}>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isstudent ? "YES" : "NO"}</p>
        </div>
    )
}
export default Student