"use client";
import React, { useState } from "react";
import axios from "axios";
import AlreadyHaveAccount from "@/components/authentication/AlreadyHaveAccount";
import PrivacyAndPolicy from "@/components/authentication/PrivacyAndPolicy";


interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const SignUp = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://akil-backend.onrender.com/signup",
        userData
      );

      if (response.status === 200) {
        console.log("Data sent successfully:", response.data);
        return response.data;
      } else {
        console.error("Unexpected response status:", response.status);
        // Handle other response statuses as needed
      }
    } catch (error) {
      console.error("Error sending data:", error);
      throw error;
    }
  };

  return (
    <div className="flex flex-col w-[408px] mx-auto gap-6 pt-[34px]">
      <h1 className="autho-sign-style">Sign Up Today!</h1>
      <div className="flex items-center justify-between">
        <div className="sign-in-line"></div>{" "}
        <h3 className="opacity-50">Or Sign Up with Email</h3>
        <div className="sign-in-line"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="signin-label">Full Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Enter your Full Name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="signin-label">Email Address</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="signin-label">Password</label>

          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="signin-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="signin-label">Enter Your Role</label>
          <input
            type="text"
            name="role"
            value={userData.role}
            onChange={handleChange}
            placeholder="Role"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <button type="submit" className="sign-button bg-primary ">
          Sign Up
        </button>
      </form>
      <AlreadyHaveAccount />
      <PrivacyAndPolicy />
    </div>
  );
};

export default SignUp;
