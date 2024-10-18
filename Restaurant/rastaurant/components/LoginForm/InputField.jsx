import React, { useState } from "react";

function InputField({
  label,
  type,
  value,
  onChange,
  placeholder,
  showPasswordToggle,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="mb-2">
      <label
        className="block text-sm font-semibold text-zinc-800 mb-1"
        htmlFor={`input-${label.toLowerCase().replace(" ", "-")}`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          id={`input-${label.toLowerCase().replace(" ", "-")}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-3 py-3 text-black dark:text-white bg-neutral-50 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <img
              src={
                showPassword
                  ? "http://b.io/ext_9-"
                  : "https://cdn.builder.io/api/v1/image/assets/TEMP/9241b4f1b2cfd6f07040d4828058774ac89ff7a7d4e70c2b11487993146c911b?placeholderIfAbsent=true&apiKey=96fec37e0c544caea912d1419137e19d"
              }
              alt=""
              className="w-6 h-6"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;
