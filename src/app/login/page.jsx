"use client";
import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import SocialSystem from "@/components/SocialSystem/SocialSystem";
import Swal from "sweetalert2";
import Navbar from "@/components/Navbar/Navbar";

function Page() {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire(
      "Login successful (^_^)",
      "But This project is under construction !!.. ",
      "success"
    );
  };
  return (
    <div className="bg-myBg">
      <Navbar />
      <div className="grid md:grid-cols-[.9fr,1fr] gap-10 pt-2 lg:mx-16 mx-5">
        <div>
          <p className="text-lg font-bold text-center text-primaryColor">
            Login With Social :
          </p>
          <SocialSystem />
          <div className="w-full">
            <Image
              src="/images/login.svg"
              alt="logo"
              width={500}
              height={400}
              className="mx-auto"
              priority
            />
          </div>
        </div>
        <div className="text-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-3/4 px-10 mt-2 shadow-xl pt-16 py-8  mx-auto rounded-lg"
          >
            <h2 className="text-3xl font-semibold">Please Login </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email"
                className="bg-[#E8F0FE] input w-full  "
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-700">
                  email is required
                </p>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type={showPass ? "text" : "password"}
                name="password"
                {...register("password", { required: true })}
                placeholder="Enter Your password"
                className="bg-[#E8F0FE]  input w-full "
              />
              {showPass ? (
                <FaEye
                  onClick={() => setShowPass(!showPass)}
                  className="absolute  top-[60%] right-1/4"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-[60%] right-1/4"
                />
              )}
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
            </div>

            <div className="my-6">
              <button className="my_button" type="submit" variant="dark">
                Login
              </button>
            </div>
            <p className="text-lg font-medium mt-5">
              Dont’t Have An Account ?
              <Link className="font-medium text-[#398AB9]" href="/signup">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
