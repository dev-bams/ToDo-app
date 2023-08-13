import PropTypes from "prop-types";

function ToDoItem(props) {
  return (
    <div className="todo__item">
      <h4 className="todo__name">{props.toDoTitle}</h4>
      <button className="todo__delete">delete</button>
    </div>
  );
}

// Define prop types outside of the component function
ToDoItem.propTypes = {
  toDoTitle: PropTypes.string.isRequired,
};

export default ToDoItem;
