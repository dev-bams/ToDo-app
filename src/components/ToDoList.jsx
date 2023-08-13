import PropTypes from "prop-types"; // Import PropTypes
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  // Destructure the 'toDoList' prop
  const { toDoList } = props;

  // Map over the to-do list and render ToDoItem components
  return (
    <div className="todo__list">
      {toDoList.map((toDoTitle, index) => {
        return <ToDoItem key={index} toDoTitle={toDoTitle} />;
      })}
    </div>
  );
}

// Define prop types to validate the 'toDoList' prop
ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ToDoList;
