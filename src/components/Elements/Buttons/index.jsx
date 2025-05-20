function Button(props) {
  const { classname = "bg-black", children = "...?" } = props;
  return (
    <button
      className={`btn h-10 px-6 font-semiblod rounded-md ${classname} text-white hover:bg-slate-400 cursor-pointer`}
      type="submit"
    >
      {children}
    </button>
  );
}

export default Button;
