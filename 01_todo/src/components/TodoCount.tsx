import React from "react";
import { useGlobalContext } from "../context/TodoContext";

interface TodoCountTypes {
  id: number;
  text1: string;
  text2: string;
}

const TodoCount: React.FC = () => {
  const { state } = useGlobalContext();
  console.log(state);

  let total = state.todos.length;
  let remaining = state.todos.filter(
    (todo) => todo.isCompleted === false
  ).length;
  let completed = total - remaining;

  let todoCountTypes: TodoCountTypes[] = [
    { id: Math.random(), text1: "Remaining", text2: `${remaining}` },
    { id: Math.random(), text1: "Completed", text2: `${completed}` },
    { id: Math.random(), text1: "Total", text2: `${total}` },
  ];

  return (
    <div className="flex flex-col justify-between gap-5">
      {todoCountTypes.map((todoCount) => (
        <div key={todoCount.id} className="flex flex-row justify-between">
          <p className="w-[75%] bg-shortColor p-2 rounded-xl text-center text-primaryColor">
            {todoCount.text1}
          </p>
          <p className="w-[25%] bg-secondaryColor p-2 rounded-xl text-center">
            {todoCount.text2}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoCount;
