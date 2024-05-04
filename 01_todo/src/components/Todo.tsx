import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoIosRadio } from "react-icons/io";
import { useGlobalContext } from "../context/TodoContext";

const Todo: React.FC = () => {
  const { state, dispatch } = useGlobalContext();

  const removeTodo = (idx: number) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: idx,
    });
  };

  const markDone = (idx: number) => {
    dispatch({
      type: "MARK_AS_DONE",
      payload: idx,
    });
  };

  return (
    <React.Fragment>
      <ul>
        {state.todos
          .sort((a, b) => b.id - a.id)
          .map((todo) => (
            <li className="pb-2">
              <div className="bg-gradient-to-b from-secondaryColor to-todoColor rounded-xl p-2 flex flex-row justify-between hover:from-todoColor hover:to-secondaryColor">
                <div className="flex gap-5 text-primaryColor">
                  <p>{todo.title}</p>
                  <p>Created on {todo.createdAt.toLocaleDateString("en-US")}</p>
                </div>
                <div className="flex flex-row text-center text-primaryColor text-2xl gap-5">
                  <button
                    onClick={
                      todo.isCompleted
                        ? () => removeTodo(todo.id)
                        : () => markDone(todo.id)
                    }
                    className={todo.isCompleted ? "complete" : ""}
                  >
                    {todo.isCompleted ? <MdDeleteForever /> : <IoIosRadio />}
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
