import ToDoList from "./ToDoList"; // Import the ToDoList component
import TodoForm from "./ToDoForm"; // Import the TodoForm component
import { useState } from "react";

function ToDoWrapper() {
  // State to manage the list of to-do items
  const [toDoList, setToDoList] = useState([]);

  // Function to update the to-do list with a new item
  function updateToDo(newToDo) {
    // Use the setToDoList function to update the state
    setToDoList((prevToDoList) => [...prevToDoList, newToDo]);
  }

  // Component rendering
  return (
    <div className="todo">
      {/* Render the TodoForm component and pass the 'updateToDo' function */}
      <TodoForm updateToDo={updateToDo} />

      {/* Render the ToDoList component */}
      {toDoList.length > 0 && <ToDoList toDoList={toDoList} />}
    </div>
  );
}

export default ToDoWrapper;
