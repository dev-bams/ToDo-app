import PropTypes from "prop-types"; // Import PropTypes
import { useEffect, useRef, useState } from "react";
function TodoForm({ addToDo }) {
  //Controlled input
  const [toDo, setToDo] = useState("");
  const inputElem = useRef(null);
  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevents the default form submission behavior
    const toDoTitle = inputElem.current.value;
    if (toDoTitle.trim().length >= 1) {
      addToDo({
        toDoTitle,
        toDoID: crypto.randomUUID(),
        isToDoCompleted: false,
      }); // Calls 'addToDo' with input value
    }
  }

  useEffect(() => {
    inputElem.current.value = "";
  });

  // Component rendering
  return (
    <form
      className="w-full flex gap-4 h-12 border-2 border-green-950"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Add a task"
        value={toDo}
        onChange={(e) => {
          setToDo(e.target.value);
        }}
        ref={inputElem}
      />
      <button
        className="text-slate-50 cursor-pointer bg-green-600"
        type="submit"
      >
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
