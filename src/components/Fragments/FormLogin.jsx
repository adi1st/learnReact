import InputForm from "../Elements/Input";
import Button from "../Elements/Buttons";

function FormLogin() {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
        isRequired={true}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="******"
        isRequired={true}
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
