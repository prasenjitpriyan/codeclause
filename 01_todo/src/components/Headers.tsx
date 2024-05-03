import * as React from "react";
import { TodoContext } from "../context/todoContext";
import { TodoContextType, ITodo } from "../@types/todo";

const Headers: React.FC = () => {
  const { saveTodo } = React.useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = React.useState<ITodo | {}>();
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
  };

  return (
    <header className="h-[25svh] bg-secondaryColor w-full flex flex-col justify-evenly items-center">
      <h1 className="text-4xl text-primaryColor font-bold">Today</h1>
      <form
        className="flex flex-row justify-evenly items-center gap-5"
        onSubmit={(e) => handleSaveTodo(e, formData)}
      >
        <div>
          <label htmlFor="search"></label>
          <input
            id="search"
            type="text"
            placeholder="Add task..."
            className="p-2 w-[40vw] rounded-md border-none bg-primaryColor"
            onChange={handleForm}
          />
        </div>
        <button
          className="bg-todoColor text-primaryColor p-2 rounded-md"
          disabled={formData === undefined ? true : false}
        >
          Add Task
        </button>
      </form>
    </header>
  );
};

export default Headers;
