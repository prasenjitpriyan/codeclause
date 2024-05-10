import React from "react";
import { FaVolumeUp } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";

const Translator = () => {
  return (
    <main className="max-w-[690px] w-[100%] p-8 shadow-md bg-[#eeeeee] rounded-md">
      <div className="rounded-xl border-2">
        <div className="flex h-[250px] w-[100%] border-b-2">
          <textarea
            name="input"
            id="input"
            spellCheck="false"
            placeholder="Enter text here..."
            className="w-[50%] border-r-2 resize-none p-[10px 15px] outline-none bg-[#eeeeee]"
          ></textarea>
          <textarea
            name="output"
            id="output"
            spellCheck="false"
            placeholder="Translation..."
            readOnly
            disabled
            className="w-[50%] bg-[#eeeeee] resize-none p-[10px 15px] outline-none border-none"
          ></textarea>
        </div>
        <ul className="flex items-center justify-between list-none p-[10px 15px]">
          <li className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <FaVolumeUp />
              <FaCopy />
            </div>
            <select name="input" id="input">
              <option value="english">English</option>
            </select>
          </li>
          <li className="flex justify-between items-center">
            <FaExchangeAlt />
          </li>
          <li className="flex justify-between">
            <select name="output" id="output">
              <option value="hindi">Hindi</option>
            </select>
            <div className="flex items-center justify-between">
              <FaVolumeUp />
              <FaCopy />
            </div>
          </li>
        </ul>
      </div>
      <button className="w-[100%] p-4 outline-none border-none cursor-pointer mt-5 text-xl rounded bg-[#A91D3A] text-[#eeeeee]">
        Translate Text
      </button>
    </main>
  );
};

export default Translator;
