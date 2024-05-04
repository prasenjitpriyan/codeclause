import * as React from "react";
import Todo from "../components/Todo";
import TodoCount from "../components/TodoCount";

const Todos: React.FC = () => {
  return (
    <section className="min-h-[75svh] grid grid-col-12 gap-5 p-5">
      <div className="col-start-1 col-span-1">
        <TodoCount />
      </div>
      <div className="col-start-3 col-span-9 w-[66%]">
        <Todo />
      </div>
    </section>
  );
};

export default Todos;
