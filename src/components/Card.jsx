import React from "react";
import { motion } from "motion/react"
import { FaRegFileAlt } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import  ToggleButton  from "./ToggleButton";

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative  shrink-0 w-48 h-60 rounded-[40px] bg-zinc-900/90 text-white px-6 py-8 overflow-hidden">
      <div className="flex justify-between items-center">
        <FaRegFileAlt />
        <input type="checkbox" />
      </div>
      <p className="text-xs leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0  ">
        <div className="flex items-center justify-center px-6 py-3">
          <button className="border-white border-2 py-1 px-8 text-sm rounded-xl hover:bg-white font-semibold active:scale-95 hover:text-black transition-all ">Delete</button>
          
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
