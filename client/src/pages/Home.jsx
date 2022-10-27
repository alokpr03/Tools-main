import React, { useState } from "react";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import JSONPretty from "react-json-pretty";
const options = [
  { value: "", label: "Select Tool" },
  { value: "JSON to XML", label: "json_to_xml" },
  { value: "JSON Parser", label: "json_parser" },
  { value: "YAML", label: "yaml" },
  { value: "PDF to Image", label: "pdft_to_image" },
];
function Home() {
  const [buttonClick, setButtonClick] =useState(false);
  const [tool, setTool] = useState({ value: "", label: "Select Tool" });
  const [text, setText] = useState("");
  return (
    <div className="w-full h-screen ">
      <div className="h-full w-full  bg-[#F2F2F2] p-10">
        <h1 className="my-5 text-2xl text-blue-700 leading-3 font-bold">
          Tool Manager
        </h1>
        <CustomSelect
          options={options}
          placeholder="Select a tool"
          handleSelection={(val) => setTool(val)}
          value={tool}
          name="speciality"
        />
        {tool.value !== "" && (
          <div className="">
            <h3 className="text-[#002E94] my-2 text-lg">{tool.value}</h3>
            {buttonClick?<JSONPretty json={text}/>: <textarea
              className="min-h-[200px] w-full h-[200px] p-2 outline-none"
              placeholder="Enter JSON"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />}
            <button onClick={()=>buttonClick?setButtonClick(false):setButtonClick(true)} className="bg-blue-700 text-white font-semibold p-2 m-2 rounded-md">
              Convert
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
