// 'use client'
// import React, { useState } from "react";

// const VerifyEmailOTP = () => {
//   const [otpValues, setOtpValues] = useState(["", "", "", ""]);

//   const handleInputChange = (index, value) => {
//     if (!isNaN(value) && value.length <= 1) {
//       const newOtpValues = [...otpValues];
//       newOtpValues[index] = value;
//       setOtpValues(newOtpValues);
//     }
//   };

//   const handleComplete = () => {
//     const otp = otpValues.join("");
//     // Add logic to handle the completed OTP (e.g., send to server for verification)
//     console.log("Completed OTP:", otp);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-3xl font-bold mb-8">Verify Email</h1>
//       <div className="grid grid-cols-4 gap-5">
//         {otpValues.map((value, index) => (
//           <input
//             key={index}
//             type="text"
//             maxLength={1}
//             value={value}
//             onChange={(e) => handleInputChange(index, e.target.value)}
//             className="border border-solid border-gray-500 focus:border-blue-600 p-2 text-center w-12"
//           />
//         ))}
//       </div>
//       <button
//         onClick={handleComplete}
//         className="bg-blue-500 text-white w-24 h-10 rounded-full mt-4"
//       >
//         Verify
//       </button>
//     </div>
//   );
// };

// export default VerifyEmailOTP;
