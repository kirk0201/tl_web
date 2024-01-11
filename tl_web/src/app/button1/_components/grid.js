"use client";
import Image from "next/image";
import { useState } from "react";
import DetailCard from "./detail_card";
export default function Grid() {
  const arr = [
    {
      id: "1",
      content: "test1",
      isChecked: false,
    },
    {
      id: "2",
      content: "test2",
      isChecked: false,
    },
    {
      id: "3",
      content: "test3",
      isChecked: false,
    },
  ];

  const [isOpen, setIsOpen] = useState(...arr);

  const openCardHandler = (e, value) => {
    e.preventDefault();
    setIsOpen((state) => {
      console.log("state", state);
      console.log("e", e);
      console.log("value", value);
      return !isOpen;
    });
    <DetailCard />;
  };
  console.log("isOpen", isOpen);

  return (
    <div className="w-full mt-7">
      <div className="grid grid-flow-row gap-5">
        {arr.map((ele) => {
          return (
            <div
              className="flex rounded-lg h-20 border-[1px] justify-between items-center"
              onClick={(e) => openCardHandler(e, ele.id)}
              key={ele.id}
            >
              <Image
                src="https://via.placeholder.com/600x400"
                width={50}
                height={50}
              />
              <div className="flex-grow-[1]">{ele.id}</div>
              <div>{ele.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
