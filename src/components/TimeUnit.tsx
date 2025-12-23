import React, { use, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function TimeUnit({ size, current }: { size: number; current: number }) {
  const DecimalUnit = [];
  const[isMobile,setIsMobile]=useState<boolean>(false);
  const [offset,setOffeset]=useState<number>(0);

  for (let i = 0; i <= size; i++) {
    DecimalUnit.push(i);
  }
  // const ITEM_HEIGHT = 56; // px

  useEffect(()=>{
    function isMobile(){
    
      setIsMobile(window.innerWidth<=640);
      
      
    }
    window.addEventListener("resize",isMobile);

  return()=>{
    window.removeEventListener("resize",isMobile);
  }
  },[])

  useEffect(()=>{
    console.log("effect second");
    if(isMobile){
      setOffeset((300-current*40));
    }else{
      setOffeset((300-current*56));
      
    }
  },[isMobile,current])

  // const offset = 300 - current * ITEM_HEIGHT;
  // console.log(offset);

  return (
    <div
      className={`flex flex-col justify-center self-start text-white bg-gray-800 rounded-3xl relative shadow-xl border border-cyan-300/20 drop-shadow-xl/50 shadow-cyan-300/50 transition-transform duration-500 ease-out will-change`}
      style={{ transform: `translateY(${offset}px)` }}>
      {DecimalUnit.map((unit) =>
        unit === current ? (
          <div
            className="relative flex items-center justify-center sm:h-14 h-10   rounded-full sm:w-14 w-10 transition-all duration-500 ease-out will-change-transform"
            key={uuid()}>
            <div className="absolute sm:top-[20%] top-[16%] rounded-full  sm:h-14 sm:w-14 h-10 w-10 bg-gray-900 flex items-center justify-center font-extrabold drop-shadow-xl  transition-all duration-500 ease-out will-change-transform text-amber-400">
              {unit}
            </div>
            <div className="absolute top-0  flex items-center sm:h-20 sm:w-20 h-13 w-13 justify-center bg-amber-400/30 backdrop-blur-none  rounded-full  backface-visible transition-transform duration-500 ease-out will-change-transform shadow-xl border border-amber-300/20 drop-shadow-xl/50 shadow-amber-500/50"></div>
          </div>
        ) : (
          <div
            className="sm:h-14 sm:w-14 h-10 w-10 flex items-center justify-center transition-all duration-500 ease-out will-change-transform text-gray-700"
            key={uuid()}>
            {unit}
          </div>
        )
      )}
    </div>
  );
}

export default TimeUnit;
