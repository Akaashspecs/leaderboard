import { useState } from "react";
import TaskTable from "./Tanstacktable";
import Select, { StylesConfig } from "react-select";
import "./Header.css";
import { header } from "./helper";
import { SiWindows11 } from "react-icons/si";
import { TiArrowSortedDown } from "react-icons/ti";

const options = [
  { value: "0%", label: "0%" },
  { value: "0.5%", label: "0.5%" },
  { value: "1%", label: "1%" },
];

function App() {
  const [selectedOption, setSelectedOption] = useState<any>([
    { value: "0%", label: "0%" },
  ]);

  const customStyles: StylesConfig<any, true, any> = {
    control: (base) => ({
      ...base,
      height: 35,
      minHeight: 35,
      borderRadius: " 0px 10px 10px 0px",
      color: "#FFFFFF",
    }),
  };

  return (
    <>
      <div className=" h-screen w-screen border-5 border-cyan-500 flex flex-col items-center ">
        <div className="h-20 border w-full border-b-gray-400"></div>
        <div className="w-[1200px] flex gap-4 mt-3">
          {header.map((item) => (
            <div className="flex  items-center" key={item.headers}>
              {item?.headers === "LeaderBoard" && (
                <SiWindows11 className="mr-1" />
              )}{" "}
              {item.headers}
              {item?.headers === "Historical Trading" && (
                <TiArrowSortedDown />
              )}{" "}
            </div>
          ))}
        </div>
        <div className="h66 text-6xl text-zinc-900 items-center flex text-center h-[200px]">
          LeaderBoards
        </div>
        <div className="w-[1200px] flex shadow-lg rounded-3xl mb-3">
          <span></span>
          <div className=" grow  ">
            <div className=" px-3 pt-2 pb-1 flex justify-between bg-indigo-600 rounded-t-2xl content-center">
              <div className="text-white text-3xl font-semibold">
                Basic Backtest
              </div>
              <div className="flex h-[35px] mt-1">
                <div className="bg-gray-200 flex text-center items-center px-5 rounded-l-[10px] ">
                  Slippage
                </div>
                <div>
                  {" "}
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={selectedOption}
                    onChange={(newValue) => setSelectedOption(newValue)}
                    options={options}
                    styles={customStyles}
                  />
                </div>
              </div>
            </div>
            <TaskTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
