import React from "react";

const DontHaveAccount = () => {
  return (
    <div className="flex flex-row gap-2">
      <h3>Don’t have an account?</h3>
      <button className=" text-primary text-[16px] font-semibold">
        Sign Up
      </button>
    </div>
  );
};

export default DontHaveAccount;
