import PropTypes from "prop-types"; // Import PropTypes
function TodoForm({ addToDo }) {
  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevents the default form submission behavior
    const toDoTitle = e.target.querySelector("#js-todo__input").value;
    if (toDoTitle.trim().length >= 1) {
      addToDo({
        toDoTitle: toDoTitle,
        toDoID: crypto.randomUUID(),
        isToDoCompleted: false,
      }); // Calls 'addToDo' with input value
      e.target.querySelector("#js-todo__input").value = "";
    }
  }

  // Component rendering
  return (
    <form className="todo__form" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="todo__input"
        id="js-todo__input"
        type="text"
        placeholder="Enter ToDo"
      />
      <button className="todo__add-btn" type="submit">
        Add
      </button>
    </form>
  );
}

// Define prop types for the 'addToDo' prop
TodoForm.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

export default TodoForm;
