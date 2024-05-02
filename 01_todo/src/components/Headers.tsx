const Headers = () => {
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
            className="p-2 w-[40vw] rounded-md border-none bg-primaryColor "
          />
        </div>
        <button className="bg-todoColor text-primaryColor p-2 rounded-md">
          Add Task
        </button>
      </div>
    </header>
  );
};

export default Headers;
