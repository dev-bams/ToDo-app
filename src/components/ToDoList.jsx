import PropTypes from "prop-types"; // Import PropTypes
import ToDoItem from "./ToDoItem";

function ToDoList({ toDoList }) {
  // Map over the to-do list and render ToDoItem components
  return (
    <div className="todo__list">
      {toDoList.map(({ toDoTitle, toDoID }) => {
        return <ToDoItem key={toDoID} toDoTitle={toDoTitle} />;
      })}
    </div>
  );
}

// Define prop types to validate the 'toDoList' prop
ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ToDoList;
