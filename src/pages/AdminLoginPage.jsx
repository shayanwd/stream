import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MkdSDK from "../utils/MkdSDK";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";
import Logo from "../assets/images/logo.png";

const AdminLoginPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,

    });
  };

  scrollToTop()
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();

  const { dispatch } = React.useContext(AuthContext);
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
      const result = await sdk.login(data.email, data.password, "admin");
      if (!result.error) {
        dispatch({
          type: "LOGIN",
          payload: result,
        });
        navigate("/admin/dashboard");


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

      <form
      className="container mx-auto"

        onSubmit={handleSubmit(onSubmit)}
      >

        <h5 className="lg:text-[32px] md:text-[32px] text-[18px] font-[600] text-white text-center mb-8">
        Create an account to save your preferences and make your next experience with Streamie even easier.</h5>

        <fieldset className="flex gap-1 flex-col mt-4 type-field">

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
        <fieldset className="flex gap-1 flex-col mt-2 type-field">

          <input
            {...register("password")}
            className="rounded-md border-slate-900"
            type="password"
            placeholder="Enter Password"
          />
          <p className="text-red-500 text-xs italic">
            {errors.password?.message}
          </p>
        </fieldset>
        <div className="text-center mt-10">
          {/* <button type="submit" className={`sitebtnarrow site-btn mx-auto text-center w-fit`} >
            <span>Submit</span>
          </button> */}
          <NavLink to='/result' className={`sitebtnarrow site-btn mx-auto text-center w-fit`} >
            <span>Submit</span>
          </NavLink>
          <div className="text-center mt-10">
        <NavLink to='/result' className='text-[18px] font-[400] text-center mx-auto text-[#FFF] border-[white] border-b'>SKIP</NavLink>
        </div>
        </div>

      </form>
    </>
  );
};

export default AdminLoginPage;
