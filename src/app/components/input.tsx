type PropInput = {
  type: string;
  placeholder: string;
};

export default function Input({ type, placeholder }: PropInput) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="p-3 border rounded-md w-full"
      />
    </>
  );
}
