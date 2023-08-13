function TodoForm(prop) {
  // Destructuring the 'updateToDo' prop from 'prop'
  const updateToDo = prop.updateToDo;

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevents the default form submission behavior
    updateToDo(e.target.querySelector("#js-todo__input").value); // Calls 'updateToDo' with input value
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

export default TodoForm;
