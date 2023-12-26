"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const defaultFormData = {
  name: "",
  email: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <>
      <section className=" container mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
          <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Create An Account
            </h1>
            <p>OR</p>
            <span className="inline-flex items-center">
              {" "}
              <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
              |
              <FcGoogle className="ml-3 text-4xl cursor-pointer" />
            </span>
          </div>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              required
              onChange={handleInputChange}
              className={inputStyles}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="name@email.com"
              required
              onChange={handleInputChange}
              className={inputStyles}
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              required
              minLength={6}
              onChange={handleInputChange}
              className={inputStyles}
            />
            <button
              type="submit"
              className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign Up
            </button>
          </form>
          <button className="text-blue-700 underline">login</button>
        </div>
      </section>
    </>
  );
};

export default Auth;
