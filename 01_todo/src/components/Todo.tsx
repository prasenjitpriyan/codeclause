import * as React from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoIosRadio } from "react-icons/io";

const Todo: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-secondaryColor to-todoColor rounded-xl p-2 flex flex-row justify-between hover:from-todoColor hover:to-secondaryColor">
      <div className="flex gap-5 text-primaryColor">
        <button>
          <IoIosRadio />
        </button>
        <p>Hello</p>
      </div>
      <div className="flex flex-row text-center text-primaryColor text-2xl gap-5">
        <button>
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default Todo;
