import React from "react";

function Button({ text, onClick }) {
  return (
    <button
    type="button"
    className="margin-10"
    onClick={onClick}
  >
    {text}
  </button>
  );
}

export default Button;
