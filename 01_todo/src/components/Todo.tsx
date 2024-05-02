import { MdDeleteForever } from "react-icons/md";

interface TodoCountTypes {
  id: number;
  text1: string;
  text2: string;
}

let todoCountTypes: TodoCountTypes[] = [
  { id: Math.random(), text1: "Remaining", text2: "01" },
  { id: Math.random(), text1: "Completed", text2: "01" },
  { id: Math.random(), text1: "Total", text2: "01" },
];

const Todo = () => {
  return (
    <section className="min-h-[75svh] grid grid-col-12 gap-5 p-5">
      <div className="col-start-1 col-span-1">
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
      </div>
      <div className="col-start-3 col-span-9 w-[66%]">
        <div className="bg-gradient-to-b from-secondaryColor to-todoColor rounded-xl p-2 flex flex-row justify-between hover:from-todoColor hover:to-secondaryColor">
          <div className="flex gap-5 text-primaryColor">
            <input id="todo" type="radio" name="todos" />
            <label htmlFor="todo">Do that</label>
          </div>
          <div className="flex text-center text-primaryColor text-2xl">
            <button>
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todo;
