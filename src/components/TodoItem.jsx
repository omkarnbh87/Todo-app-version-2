import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <center className="todo-container">
      <div className="container text-center">
        <div className="row ok-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            {" "}
            <button
              type="button"
              className="btn btn-danger ok-button"
              onClick={() => {
                deleteItem(todoName);
              }}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default TodoItem;
