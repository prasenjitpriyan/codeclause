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

const TodoCount = () => {
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
