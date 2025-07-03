const InputField = ({
  name,
  onChange,
  type,
  placeholder,
  label,
  necessary,
}: {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  label?: string;
  necessary?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-1 ">
      {label ? (
        <label className="first-letter:uppercase font-semibold">
          {label} {necessary ? "*" : ""}
        </label>
      ) : (
        <></>
      )}
      <input
        className="border-b-[1] border-b-white/50 px-2 py-1 outline-0 opacity-50 focus-within:opacity-100 focus-within:border-b-white"
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder || `Enter ${name}...`}
      />
    </div>
  );
};

export default InputField;
