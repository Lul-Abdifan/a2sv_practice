"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import DontHaveAccount from "@/components/authentication/DontHaveAccount";

interface UserType {
  email: string;
  password: string;
}

const SignIn = () => {
  const [userData, setUserData] = useState<UserType>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with data:", userData);
  };

  return (
    <div className="flex flex-col w-[406px] h-[390px] gap-6 absolute right-0 top-0 mt-[141px] mr-[141px]">
      <h1 className="auth-sign-style">Welcome Back,</h1>
      <div className="flex justify-between">
        {" "}
        <div className="sign-in-line"></div>{" "}
        <div className="sign-in-line"></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="signin-label">Email Address</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="px-4 py-3 border rounded focus:outline-none focus:border: [#D6DDEB]"
          />
        </div>
        <div className="flex flex-col">
          <label className="signin-label">Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Email Address"
            className="px-3 py-2 border rounded focus:outline-none focus:border: [#D6DDEB]"
          />
        </div>
        <button type="submit" className="sign-button bg-primary ">
          Submit
        </button>
      </form>
      <DontHaveAccount />
    </div>
  );
};

export default SignIn;
