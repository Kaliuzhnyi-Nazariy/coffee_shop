"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import Link from "next/link";
import { BiHide, BiShow } from "react-icons/bi";
import { useAppDispatch } from "@/app/redux/hooks";
import { LogUser } from "@/app/redux/user/typesAndInterfaces";
import { useSelector } from "react-redux";
import { userError, userLoading } from "@/app/redux/user/selectors";
import { useRouter } from "next/navigation";
import { signIn } from "@/app/redux/user/authOperations";
import toast from "react-hot-toast";

const Signin = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [redirectLoading, setRedirectingLoading] = useState(false);

  const [values, setValues] = useState<LogUser>({
    phoneNumber: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const error = useSelector(userError);
  const router = useRouter();

  const submitFn = async () => {
    if (!values.password || !values.phoneNumber) return;
    try {
      const res = await dispatch(signIn(values)).unwrap();

      toast.success(`Welcome, ${res.name || "User"}!`);

      setRedirectingLoading(true);
      await router.push("/home");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      toast.error("Wrong credentials");
    }
  };

  const isLoading = useSelector(userLoading);

  const hoverAndActiveStyles =
    "hover:border-white hover:bg-transparent hover:text-white active:border-white active:bg-transparent active:text-white";

  return (
    <div className="flex flex-col items-center justify-center px-5 bg-[#2B2B2B] h-[100vh] text-white">
      <h3 className="mb-6 text-2xl">Signin</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitFn();
        }}
        className="flex flex-col gap-4"
      >
        <InputField
          name="phoneNumber"
          onChange={(e) => handleChange(e)}
          placeholder="Enter phone number"
          label="Phone number"
          necessary={true}
        />
        <div className="relative">
          <InputField
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => handleChange(e)}
            label="Password"
            necessary={true}
          />
          <button
            type="button"
            className="absolute right-0 top-1/2"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <BiShow /> : <BiHide />}
          </button>
        </div>

        <button
          type="submit"
          className={`text-black font-semibold border-[1] border-transparent bg-white py-1 ${hoverAndActiveStyles} mt-4`}
        >
          {isLoading ? "Loading..." : "Sign in"}
        </button>
      </form>
      <Link href={"/auth/signup"} className="mt-3">
        You don{"'"}t have an account? <b>Sign up!</b>
      </Link>
      {error ? (
        <>
          <h3 className="font-semibold mt-3">Errors: </h3>
          {Array.isArray(error) ? (
            <ul className="px-5 w-[260px] list-disc text-[12px]">
              {error.map((err) => {
                return <li key={err}>{err}</li>;
              })}
            </ul>
          ) : (
            <p>{error}</p>
          )}
        </>
      ) : (
        <></>
      )}
      {isLoading || redirectLoading ? (
        <div className="fixed w-full h-full bg-black/60">
          <p className="absolute top-1/2 right-1/2 translate-x-1/2 font-semibold">
            Loading...
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Signin;
