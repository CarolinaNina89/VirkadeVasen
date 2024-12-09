import React from "react";

function Button({ text, onClick, type = "button" }) {
  return (
    <button
      className={`button`}
      onClick={onClick} //Sätter funktionen om vad som ska hända när den klickas på
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
