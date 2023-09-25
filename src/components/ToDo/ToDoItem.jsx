import PropTypes from "prop-types";
import Uncompleted from "../../assets/icons/Uncompleted";
import Completed from "../../assets/icons/Completed";
import Favorite from "../../assets/icons/Favorite";
import Delete from "../../assets/icons/Delete";

function ToDoItem({
  toDoID,
  toDoTitle,
  deleteToDo,
  isToDoCompleted,
  markCompleted,
}) {
  return (
    <div className=" flex gap-4 h-12 bg-dark-secondary-bg items-center pr-4 pl-4">
      <button
        className="h-full"
        onClick={() => {
          markCompleted(toDoID);
        }}
      >
        {isToDoCompleted ? <Completed /> : <Uncompleted />}
      </button>
      <h4 className="h-full flex items-center flex-grow">{toDoTitle}</h4>
      <button>
        <Favorite />
      </button>
      <button
        className="h-full"
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
