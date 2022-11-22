import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../../hooks/useToken";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  useTitle("Login");

  const { signIn, googleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    //console.log(data);
    const email = data.email;
    const password = data.password;

    setLoginError("");
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              required
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />{" "}
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>
          New to Doctors Portal?
          <Link className="text-secondary hover:text-accent" to="/register">
            Create new Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          <FcGoogle className="w-8 h-8 mr-3" /> CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
