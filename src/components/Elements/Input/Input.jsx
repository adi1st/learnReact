function Input(props) {
  const { type, placeholder, name, isRequired } = props;

  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
      id={name}
      required={isRequired ? true : false}
    />
  );
}

export default Input;
