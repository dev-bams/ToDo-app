import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";
function TodoForm({ addToDo }) {
  //Controlled input
  const [toDo, setToDo] = useState("");
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
    <form className="w-full flex gap-4 h-12" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="todo__input"
        id="js-todo__input"
        type="text"
        placeholder="Enter ToDo"
        value={toDo}
        onChange={(e) => {
          setToDo(e.target.value);
        }}
      />
      <input type="date" className="todo__input" />
      <button className="text-slate-50 cursor-pointer bg-green-600" type="submit">
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
