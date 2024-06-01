import React from "react";
import NavComponent from "../components/ui/Nav/Nav.component";
import { Button } from "../components/ui/button";
import { FaPlus } from "react-icons/fa"

const HomePage = () => {
  return (
    <div className=" w-screen h-screen bg-[#fcfcfd]">
      <NavComponent />
      <div className=" flex px-52 mx-auto justify-end">
        <div className=" mt-3">
          <Button className="bg-blue-500 space-x-2"> 
          <FaPlus/>
          <p>Create Contact</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
