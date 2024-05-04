import React, { useState } from "react";
import { useGlobalContext } from "../context/TodoContext";

const AddTodo: React.FC = () => {
  const { dispatch } = useGlobalContext();
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addItem = () => {
    if (value.length > 0) {
      dispatch({
        type: "ADD_TODO",
        payload: value,
      });
      setValue("");
    }
  };

  return (
    <header className="h-[25svh] bg-secondaryColor w-full flex flex-col justify-evenly items-center">
      <h1 className="text-4xl text-primaryColor font-bold">Today</h1>
      <div className="flex flex-row justify-evenly items-center gap-5">
        <div>
          <label htmlFor="search"></label>
          <input
            id="search"
            type="text"
            placeholder="Add task..."
            className="p-2 w-[40vw] rounded-md border-none bg-primaryColor"
            value={value}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-todoColor text-primaryColor p-2 rounded-md"
          onClick={addItem}
        >
          Add Task
        </button>
      </div>
    </header>
  );
};

export default AddTodo;
