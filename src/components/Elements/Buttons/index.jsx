function Button(props) {
  const {
    classname = "bg-black",
    children = "...?",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <button
      className={`h-10 px-6 font-semiblod rounded-md ${classname} text-white hover:bg-slate-400 cursor-pointer`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
