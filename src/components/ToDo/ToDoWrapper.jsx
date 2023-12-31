import ToDoList from "./ToDoList"; // Import the ToDoList component
import TodoForm from "./ToDoForm"; // Import the TodoForm component
import CurrentDate from "../date/Date";
import { useEffect, useState } from "react";

function ToDoWrapper() {
  // State to manage the list of to-do items
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("toDoList")) || []
  );

  // Function to update the to-do list with a new item
  function addToDo(newToDo) {
    // Use the setToDoList function to update the state
    setToDoList((prevToDoList) => [...prevToDoList, newToDo]);
  }

  function deleteToDo(toDoID) {
    setToDoList((prevToDoList) =>
      prevToDoList.filter((toDoItem) => toDoItem.toDoID !== toDoID)
    );
  }

  function markCompleted(toDoID) {
    const newList = toDoList.map((toDoItem) => {
      if (toDoItem.toDoID === toDoID) {
        return { ...toDoItem, isToDoCompleted: !toDoItem.isToDoCompleted };
      }
      return;
    });
    setToDoList(newList);
  }

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  // Component rendering
  return (
    <div className="gap-6 h-full p-8">
      <CurrentDate />
      {/* Render the TodoForm component and pass the 'updateToDo' function */}
      <TodoForm addToDo={addToDo} />

      {/* Render the ToDoList component */}
      {toDoList.length > 0 && (
        <ToDoList
          toDoList={toDoList}
          deleteToDo={deleteToDo}
          markCompleted={markCompleted}
        />
      )}
    </div>
  );
}

export default ToDoWrapper;
