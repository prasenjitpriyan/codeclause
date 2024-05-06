import React from "react";

const HeroText: React.FC = () => {
  return (
    <div className="h-[10svh] flex flex-col justify-center item-center">
      <h1 className="text-center text-2xl font-semibold">Easy Translation</h1>
      <p className="text-center text-sky-500">
        Translate with ease and precision
      </p>
    </div>
  );
};

export default HeroText;
