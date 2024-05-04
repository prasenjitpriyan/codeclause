import * as React from "react";
import Todo from "../components/Todo";
import TodoCount from "../components/TodoCount";

const Todos: React.FC = () => {
  return (
    <section className="grid grid-cols-1 gap-5 p-5 md:grid-cols-8">
      <div className="col-span-1 md:col-span-3">
        <TodoCount />
      </div>
      <div className="col-span-1 md:col-span-5">
        <Todo />
      </div>
    </section>
  );
};

export default Todos;
