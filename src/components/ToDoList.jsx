import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  const toDoList = props.toDoList;
  return (
    <div>
      {toDoList.map((toDoTitle, index) => {
        return <ToDoItem key={index} toDoTitle={toDoTitle} />;
      })}
    </div>
  );
}
export default ToDoList;
