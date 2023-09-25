import PropTypes from "prop-types"; // Import PropTypes
import ToDoItem from "./ToDoItem";

function ToDoList({ toDoList, deleteToDo, markCompleted }) {
  console.log(toDoList);
  // Map over the to-do list and render ToDoItem components
  return (
    <div className=" flex flex-col gap-2">
      {toDoList.map(({ toDoTitle, toDoID, isToDoCompleted }) => {
        return (
          <ToDoItem
            key={toDoID}
            toDoID={toDoID}
            toDoTitle={toDoTitle}
            deleteToDo={deleteToDo}
            isToDoCompleted={isToDoCompleted}
            markCompleted={markCompleted}
          />
        );
      })}
    </div>
  );
}

// Define prop types to validate the 'toDoList' prop
ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteToDo: PropTypes.func.isRequired,
  markCompleted: PropTypes.func.isRequired,
};

export default ToDoList;
