import Label from "./Label";
import Input from "./Input";

function InputForm(props) {
  const { label, type, name, placeholder, isRequired } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        isRequired={isRequired}
      />
    </div>
  );
}

export default InputForm;
