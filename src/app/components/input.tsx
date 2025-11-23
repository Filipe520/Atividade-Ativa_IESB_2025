"use client";

type PropInput = {
  type: string;
  placeholder: string;
  color: string;
  id: string;
  onChangeValue?: (value: string) => void;
};

export default function Input({
  type,
  placeholder,
  color,
  id,
  onChangeValue,
}: PropInput) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`${color} px-5 py-3 rounded-3xl border border-transparent hover:border-sky-400 max-[500px]:border-sky-500 outline-none`}
        id={id}
        onChange={(e) => onChangeValue?.(e.target.value)}
      />
    </>
  );
}
