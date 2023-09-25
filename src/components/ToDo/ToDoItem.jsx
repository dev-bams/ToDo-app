import PropTypes from "prop-types";
import Uncompleted from "../../assets/icons/Uncompleted";
import Completed from "../../assets/icons/Completed";
import Delete from "../../assets/icons/Delete";

function ToDoItem({
  toDoID,
  toDoTitle,
  deleteToDo,
  isToDoCompleted,
  markCompleted,
}) {
  return (
    <div className=" flex gap-4 border-2">
      <button
        onClick={() => {
          markCompleted(toDoID);
        }}
      >
        {isToDoCompleted ? <Completed /> : <Uncompleted />}
      </button>
      <h4>{toDoTitle}</h4>
      <button
        onClick={() => {
          deleteToDo(toDoID);
        }}
      >
        <Delete />
      </button>
    </div>
  );
}

// Define prop types for the 'toDoTitle' and 'deleteToDo' props
ToDoItem.propTypes = {
  toDoTitle: PropTypes.string.isRequired,
  toDoID: PropTypes.string.isRequired,
  isToDoCompleted: PropTypes.bool.isRequired,
  deleteToDo: PropTypes.func.isRequired,
  markCompleted: PropTypes.func.isRequired,
};

export default ToDoItem;
