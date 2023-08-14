import PropTypes from "prop-types";

function ToDoItem({ toDoID, toDoTitle, deleteToDo, markCompleted }) {
  return (
    <div className="todo__item">
      <h4 className="todo__name">{toDoTitle}</h4>
      <button
        onClick={() => {
          markCompleted(toDoID);
        }}
      >
        mark
      </button>
      <button
        className="todo__delete"
        onClick={() => {
          deleteToDo(toDoID);
        }}
      >
        delete
      </button>
    </div>
  );
}

// Define prop types for the 'toDoTitle' and 'deleteToDo' props
ToDoItem.propTypes = {
  toDoTitle: PropTypes.string.isRequired,
  toDoID: PropTypes.string.isRequired,
  deleteToDo: PropTypes.func.isRequired,
  markCompleted: PropTypes.func.isRequired,
};

export default ToDoItem;
