import { Box } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-center mx-24 mt-16 mb-10">
      <div className="flex">
        <div className="bg-[#ebe9db] w-20 h-20 flex items-center justify-center rounded-lg">
          <Box className="text-red-400 w-12 h-12" />
        </div>
        <div className="ps-8">
          <h1 className="font-bold text-2xl w-[200px] pb-2">
            Use Database with your stack
          </h1>
          <p className="text-gray-500 w-[350px]">
            We offer client and server libraries in everything from React and
            Ruby to IOS.
          </p>
        </div>
      </div>
      <div className="border-l-2 border-gray-500 h-32 px-6"></div>
      <div className="flex">
        <div className="bg-[#ebe9db] w-20 h-20 flex justify-center items-center rounded-lg">
          <Box className="text-red-400 w-12 h-12 " />
        </div>
        <div className="ps-8">
          <h1 className="font-bold text-2xl w-[200px] pb-2">Security & privacy</h1>
          <p className="text-gray-500 w-[350px]">
            Database supports PII data encrypted with AES0256 at rest or
            explicit user consent flows.
          </p>
        </div>
      </div>
    </div>
  );
}
