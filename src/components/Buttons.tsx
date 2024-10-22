import React from "react";
import { ButtonType } from "../types/ButtonType";

const OutlinedButton: React.FC<ButtonType> = ({ text, disable = false }) => {
  return (
    <button
      className={`border w-[200px] p-4 rounded-button border-secondary font-semibold ${
        disable && "bg-bd-color hover:bg-bd-color hover:text-black"
      } hover:bg-primary hover:text-white`}
      disabled={disable}
    >
      {text}
    </button>
  );
};

const DefaultButton: React.FC<ButtonType> = ({ text, disable = false }) => {
  return (
    <button
      className={`w-[200px] bg-primary rounded-button text-white font-semibold ${
        disable && "bg-bd-color hover:bg-bd-color"
      } hover:bg-secondary`}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export { OutlinedButton, DefaultButton };
