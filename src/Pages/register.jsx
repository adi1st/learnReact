import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

function RegisterPage() {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="mt-5 font-sm text-slate-500 text-center">
        already have an a account?
        <Link to="/login" className="font-bold text-blue-600">
          {" "}
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default RegisterPage;
