import React from "react";
import textImage from "../assets/text.svg";
import image from "../assets/image.svg";
import undoImage from "../assets/undo.svg";
import starImage from "../assets/star.svg";
import shiftImage from "../assets/shift.svg";
import { TranslateButtonType } from "../vite-env";

const Translate: React.FC = () => {
  const translateButtons: TranslateButtonType[] = [
    {
      id: Math.random(),
      src: `${textImage}`,
      className:
        "w-32 flex justify-center gap-2 p-2 rounded text-white bg-orange-500",
      text: "Text",
    },
    {
      id: Math.random(),
      src: `${image}`,
      className:
        "w-32 flex justify-center gap-2 p-2 rounded text-white bg-orange-400",
      text: "Image",
    },
    {
      id: Math.random(),
      src: `${undoImage}`,
      className:
        "w-32 flex justify-between gap-2 p-2 rounded text-white bg-orange-300",
      text: "History",
    },
    {
      id: Math.random(),
      src: `${starImage}`,
      className:
        "w-32 flex justify-between gap-2 p-2 rounded text-white bg-orange-200",
      text: "Saved",
    },
  ];

  return (
    <div className="bg-slate-200 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
      <div className="md:col-span-1 lg:col-span-2" />
      <div className="sm:col-span-8 md:col-span-6 lg:col-span-8">
        <div className="flex gap-2 mt-2 mb-2">
          {translateButtons.map(({ id, src, className, text }) => (
            <div className="flex justify-evenly gap-2" key={id}>
              <button className={className}>
                <img src={src} alt="Text" className="w-6 text-white" />
                <p>{text}</p>
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start mt-5 mb-2">
          <div className="flex flex-row justify-between bg-sky-500 p-5 text-white rounded-t-lg">
            <div className="flex gap-5 justify-start items-center">
              <p>Detect Language</p>
              <div className="flex gap-5">
                <select
                  name="language"
                  id="language"
                  className="border-none bg-sky-500"
                >
                  <option value="hindi">Hindi</option>
                  <option value="bengali">Bengali</option>
                  <option value="malayalam">Malayalam</option>
                  <option value="english">English</option>
                </select>
                <label htmlFor="language">Language</label>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="w-10">
                <img
                  src={shiftImage}
                  alt="shift"
                  className="p-2 bg-white rounded-full"
                />
              </button>
            </div>
            <div className="flex justify-end items-center">
              <div className="flex gap-5 items-center">
                <label htmlFor="language">Language</label>
                <select
                  name="language"
                  id="language"
                  className="border-none bg-sky-500"
                >
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="bengali">Bengali</option>
                  <option value="malayalam">Malayalam</option>
                </select>
              </div>
              <p>Output Language</p>
            </div>
          </div>
          <div className="flex flex-row justify-evenly bg-white">
            <div className="">
              <textarea
                name="input"
                id="input"
                className="w-[550px] h-[500px] outline-none"
              >
                Input...
              </textarea>
            </div>
            <hr className="border-2 border-gray-400-500 h-[500px]" />
            <div>
              <textarea
                name="output"
                id="output"
                className="w-[550px] h-[500px] outline-none"
              >
                Output...
              </textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-1 lg:col-span-2" />
    </div>
  );
};

export default Translate;
