import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MkdSDK from "../utils/MkdSDK";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GlobalContext, showToast } from "../globalContext";
import Logo from "../assets/images/logo.jpeg"

const AdminForgotPage = () => {
  const schema = yup
    .object({
      email: yup.string().email().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { dispatch } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let sdk = new MkdSDK();
    try {
      const result = await sdk.forgot(data.email);

      if (!result.error) {
        showToast(dispatch, "Reset Code Sent");
        navigate(`/admin/reset?token=${result.token}`);
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
      setError("email", {
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
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={`"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email?.message ? "border-red-500" : ""
              }`}
            />
            <p className="text-red-500 text-xs italic">
              {errors.email?.message}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <input
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              value="Forgot Password"
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
          className="access-card bg-white max-w-[400px] w-full mx-auto shadow-md p-8 rounded-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
           <img
          className="w-full max-w-[200px] block mb-4 mx-auto object-contain"
          src={Logo}
          alt=""
        />
          <h5 className="text-xl font-semibold text-center mb-4">
            Enter Email
          </h5>
          <fieldset className="flex gap-1 flex-col mt-4">
            <label className="block font-medium">Email</label>
            <input
              {...register("email")}
              className="rounded-md border-slate-900"
              type="email"
              placeholder="Enter Email Address"
            />
            <p className="text-red-500 text-xs italic">
              {errors.email?.message}
            </p>
          </fieldset>
          <button
            className="text-center text-white bg-blue-500 py-3 block w-full mt-8 rounded-md font-bold"
            type="submit"
          >
            Submit
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

export default AdminForgotPage;
