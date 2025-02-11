import React from "react";

const InputC =({
  className,
  type,
  placeholder,
  value,
  onChange,
  name,
}: {
  placeholder: string;
  className?: string;
  value: string;
  name: string;
  onChange: (v: string, n:string) => void;
  type: "email" | "password" | "text";
}) => {
  return (
    <input
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value, e.target.name)}
      type={type}
      placeholder={placeholder}
      className={`border-3 border-blue-500 rounded-full text-2xl p-3 ${className}`}
    />
  );
};

export default InputC;
