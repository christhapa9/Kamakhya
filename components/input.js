import React from "react";

function InputComponent({ placeholder, label }) {
  return (
    <div class=" pb-2 ">
      <label class="text-gray-700 dark:text-white pb-5">{label}</label>
      <input
        autocomplete="off"
        type="text"
        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none bg-transparent focus:borer-rose-600"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputComponent;
