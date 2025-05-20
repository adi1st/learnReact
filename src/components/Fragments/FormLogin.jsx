import InputForm from "../Elements/Input";
import Button from "../Elements/Buttons";

function FormLogin() {
  return (
    <form action="">
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
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
}

export default FormLogin;
