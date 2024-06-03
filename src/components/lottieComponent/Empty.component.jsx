import React from "react";
import Lottie from "lottie-react";
import EmptyJson from "../../lotties/Empty.json";

const EmptyComponent = () => {
  return (
    <div className="">
      <Lottie
        className=" w-52 h-48"
        animationData={EmptyJson}
        loop
        size={50}
      />
    </div>
  );
};

export default EmptyComponent;
