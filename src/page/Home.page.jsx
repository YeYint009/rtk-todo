import React from "react";
import NavComponent from "../components/ui/Nav/Nav.component";
import { Button } from "../components/ui/button";
import { FaPlus } from "react-icons/fa";
import EmptyComponent from "../components/lottieComponent/Empty.component";

const HomePage = () => {
  return (
    <div className=" w-screen h-screen bg-[#fcfcfd]">
      <NavComponent />
      <div className=" px-52 mx-auto">
        <div className=" flex justify-end mb-5">
          <Button className="bg-blue-500 space-x-2 mt-5">
            <FaPlus />
            <p>Create Contact</p>
          </Button>
        </div>
      </div>
      <div className="border w-3/5 h-[600px] mt-5 mx-auto">
        <div className=" flex flex-col justify-center items-center h-full -space-y-5">
          <EmptyComponent />
          <p className=" text-2xl font-thin text-gray-500 ">There is no List...</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
