import React from "react";
import Counter from "./Counter";
import ClassBased from "./ClassBased";
import ClassStateful from "./ClassStateful";
import Component from "./Component";

const Day1 = () => {
  return (
    <>
      <Counter />
      <ClassBased />
      <ClassStateful />
      <Component isLoggedIn = {true} />
    </>
  );
};

export default Day1;
