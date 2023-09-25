import PropTypes from "prop-types"; // Import PropTypes
import { useEffect, useRef, useState } from "react";
import Add from "../../assets/icons/Add";
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
      className="w-full flex flex-col gap-4 h-12 border-2 border-green-950"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center border-2 border-red-50">
        <Add />
        <input
          type="text"
          placeholder="Add a task"
          value={toDo}
          onChange={(e) => {
            setToDo(e.target.value);
          }}
          ref={inputElem}
        />
      </div>

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
