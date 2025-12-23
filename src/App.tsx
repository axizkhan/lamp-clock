import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import "./App.css";
import TimeUnit from "./components/TimeUnit";

function App() {
  const [timeArray, setTimeArray] = useState<Array<number>>([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    let date = new Date();
    let istTime = date.toLocaleString("en-GB", {
      timeZone: "Asia/Kolkata",
      hour12: false, // Ensures 24-hour format
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    let timeArray = istTime
      .split(":")
      .map((ele) => ele.split("").map((ele) => +ele))
      .flat(2);

    console.log(timeArray);

    setTimeArray(timeArray);

    const timeCounter = setInterval(() => {
      date = new Date();
      istTime = date.toLocaleString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour12: false, // Ensures 24-hour format
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      timeArray = istTime
        .split(":")
        .map((ele) => ele.split("").map((ele) => +ele))
        .flat(2);

      setTimeArray(timeArray);
    }, 1000);

    return () => {
      clearInterval(timeCounter);
    };
  }, []);

  return (
    <div className="h-screen w-full border-3 border-cyan-300 gap-6 flex sm:gap-16 bg-black justify-center  overflow-x-hidden overflow-y-hidden">
      {/* Hours */}

      <div className="flex sm:gap-8 gap-4 justify-center transition-all duration-500 ease-out will-change-transform relative">
        <TimeUnit
          size={2}
          current={timeArray[0]}
        />
        <TimeUnit
          size={9}
          current={timeArray[1]}
        />
      </div>
      {/* Minutes */}
      <div className="flex sm:gap-8 gap-4 justify-center transition-all duration-500 ease-out will-change-transform relative">
        <TimeUnit
          size={5}
          current={timeArray[2]}
        />
        <TimeUnit
          size={9}
          current={timeArray[3]}
        />
      </div>
      {/*Seconds*/}
      <div className="flex sm:gap-8 gap-4 justify-center transition-all duration-500 ease-out will-change-transform relative">
        <TimeUnit
          size={5}
          current={timeArray[4]}
        />
        <TimeUnit
          size={9}
          current={timeArray[5]}
        />
      </div>
    </div>
  );
}

export default App;
