import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavComponent = () => {
  return (
    <div className=" flex px-52 w-full h-20 mx-auto bg-white items-center border-b">
      <div className=" flex justify-between w-full items-center">
        <h1 className=" font-semibold text-xl">MMS</h1>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
    
  );
};

export default NavComponent;
