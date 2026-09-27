import React, { useRef, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const Foreground = () => {

  const ref = useRef(null)

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen:true, tagTitle:'Downlord Now', tagColor:"green"},
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen:true, tagTitle:'Downlord Now', tagColor:"blue"},
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen:true, tagTitle:'Downlord Now', tagColor:"green"},
    },
  ];

  return (
    <>
      <Navbar />
      <div ref={ref} className="fixed top-16 left-0 z-3 w-full h-[calc(100vh-4rem)] flex gap-10 flex-wrap p-5">
        {data.map((item, idx)=>(
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
