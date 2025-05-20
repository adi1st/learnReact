import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

function LoginPage() {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="mt-5 font-sm text-slate-500 text-center">
        don't have an account?
        <Link to="/register" className="font-bold text-blue-600">
          {" "}
          Register now
        </Link>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;
