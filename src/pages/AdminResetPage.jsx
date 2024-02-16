import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MkdSDK from "../utils/MkdSDK";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";
import { showToast } from "../globalContext";
import Logo from "../assets/images/logo.jpeg"
NavLink

const AdminResetPage = () => {
  const { dispatch } = React.useContext(AuthContext);
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const token = params.get("token");

  const schema = yup
    .object({
      code: yup.string().required(),
      password: yup.string().required(),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    })
    .required();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    let sdk = new MkdSDK();
    try {
      const result = await sdk.reset(token, data.code, data.password);
      if (!result.error) {
        showToast(dispatch, "Password Reset");
        setTimeout(() => {
          navigate("/admin/reset_confirmation");
        }, 2000);
      } else {
        if (result.validation) {
          const keys = Object.keys(result.validation);
          for (let i = 0; i < keys.length; i++) {
            const field = keys[i];
            setError(field, {
              type: "manual",
              message: result.validation[field],
            });
          }
        }
      }
    } catch (error) {
      console.log("Error", error);
      setError("code", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <>
      {/* <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8 "
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="code"
            >
              Code
            </label>
            <input
              type="text"
              placeholder="Enter code sent to your email"
              {...register("code")}
              className={`"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.code?.message ? "border-red-500" : ""
              }`}
            />
            <p className="text-red-500 text-xs italic">
              {errors.code?.message}
            </p>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="******************"
              {...register("password")}
              className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password?.message ? "border-red-500" : ""
              }`}
            />
            <p className="text-red-500 text-xs italic">
              {errors.password?.message}
            </p>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="******************"
              {...register("confirmPassword")}
              className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.confirmPassword?.message ? "border-red-500" : ""
              }`}
            />
            <p className="text-red-500 text-xs italic">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <input
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              value="Reset Password"
            />
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/admin/login"
            >
              Login?
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} manaknightdigital inc. All rights
          reserved.
        </p>
      </div> */}

      <div className="flex flex-col gap-4 bg-slate-50	min-h-screen justify-center">
       
       
        <form
          className="access-card max-w-[400px] w-full mx-auto  px-8 "
          onSubmit={handleSubmit(onSubmit)}
        >
           <img
          className="w-full max-w-[200px] block mb-4 mx-auto object-contain"
          src={Logo}
          alt=""
        />
          <h5 className="text-xl font-semibold text-center mb-4">Set New Password</h5>
          <p className="text-center text-slate-400	">Your new password must be different to previously  used password.</p>
          <fieldset className="flex gap-1 flex-col mt-4">
            <label className="block font-medium">Code</label>
            <input
               {...register("code")}
              className="rounded-md border-slate-900"
              type="text"
              placeholder="Enter Code "
            />
            <p className="text-red-500 text-xs italic">
              {errors.code?.message}
            </p>
          </fieldset>
          <fieldset className="flex gap-1 flex-col mt-4">
            <label className="block font-medium">Password</label>
            <input
             {...register("password")}
              className="rounded-md border-slate-900"
              type="password"
              placeholder="Enter Password "
            />
            <p className="text-red-500 text-xs italic">
              {errors.password?.message}
            </p>
          </fieldset>
          <fieldset className="flex gap-1 flex-col mt-2">
            <label className="block font-medium">Confirm Password</label>
            <input
             {...register("confirmPassword")}
              className="rounded-md border-slate-900"
              type="password"
              placeholder="Re-enter Password "
            />
            <p className="text-red-500 text-xs italic">
              {errors.confirmPassword?.message}
            </p>
          </fieldset>
          
          <button
            className="text-center text-white bg-blue-500 py-3 block w-full mt-8 rounded-md font-bold"
            type="submit"
          >
             Reset Password
          </button>
          
        </form>
        <NavLink to='/admin/login' className="flex justify-center items-center gap-4">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.71 13.29C8.1 12.9 8.1 12.27 7.71 11.88L3.83 8.00002L19 8.00002C19.55 8.00002 20 7.55002 20 7.00002C20 6.45002 19.55 6.00002 19 6.00002L3.82 6.00002L7.7 2.12002C8.09 1.73002 8.09 1.10002 7.7 0.71002C7.31 0.32002 6.68 0.32002 6.29 0.71002L0.7 6.30002C0.310001 6.69002 0.310001 7.32002 0.7 7.71002L6.3 13.29C6.68 13.68 7.32 13.68 7.71 13.29Z"
              fill="#323232"
            />
          </svg>
          <p>Back to Login</p>
        </NavLink>
      </div>
    </>
  );
};

export default AdminResetPage;
