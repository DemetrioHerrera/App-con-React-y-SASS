import React from "react";

const Button = ({ type, text, step = 1, setContador }) => {
  const handleEvent = () => {
    setContador(actual => actual + step);
  };

  return (
    <>
      <button className={type} onClick={handleEvent}>
        {text}
      </button>
    </>
  );
};

export default Button;
