import React from "react";
import { ClassType } from "../types";

const Class = ({
  name,
  description = "some description",
  image,
}: ClassType) => {
  return (
    <li className=" inline-block relative  mx-5  w-[450px] h-[380px]  rounded-sm">
          <div className=" p-5 absolute text-gray-20 space-y-5  z-30 flex h-[380px] w-[450px] flex-col items-center justify-center  whitespace-normal bg-primary-500 text-center text-white  opacity-0 transition duration-500 hover:opacity-90 ">
        <p className=" font-bold text-2xl font-montserrat" >{name}</p>
        <p className=" font-montserrat">{description}</p>
      </div>
      <img src={image} alt={`${image} photo`} />
    </li>
  );
};

export default Class;
