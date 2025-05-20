import InputForm from "../Elements/Input";
import Button from "../Elements/Buttons";

function FormRegister() {
  return (
    <form action="">
      <InputForm
        label="Name"
        type="text"
        name="name"
        placeholder="insert your name here..."
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="******"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="******"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
}

export default FormRegister;
