import { useState } from 'react'
import exportFromJSON from 'export-from-json'
import JSONPretty from "react-json-pretty";

//Icons
import {TiTick} from "react-icons/ti"

const DownloadLine = () =>{
  return(
    <div className='p-2 my-4 bg-slate-200 flex justify-between items-center'>
      <h2 className='font-bold'>File Downloaded</h2>
      <TiTick className='items-center text-2xl text-green-600'/>
    </div>
  )
}

const JS_to_XML = () => {

const [data, setData] = useState("");
const [buttonClick, setButtonClick] = useState(false)
const [prettier, setPrettier] = useState(false)
const [error, setError] = useState("")
const [errorLoader, setErrorLoader] = useState(false);

// const tempData = [{ foo: 'foo'}, { bar: 'bar' }]

const fileName = 'data'
const exportType =  exportFromJSON.types.xml

const convertXML = () => {
   const temp = [];
   temp.push(data);
   exportFromJSON({data, fileName, exportType });
};



// console.log("DataType: ", typeof data)

    return ( 
        <>
          <div className="container">
            <h3 className="text-[#002E94] my-2 text-lg">JSON to XML</h3>
            {buttonClick ? <DownloadLine/>: <textarea
              required            
              className="min-h-[200px] w-full p-2 outline-none"
              placeholder="Enter JSON"
              onChange={(e) => {
                try{
                setData(JSON.parse(e.target.value))
                setErrorLoader(false);
                setError("");
                }
                catch(err){
                  setErrorLoader(true);
                  setError("Unexpected Token, Type valid JSON");
                }
              }}
            />}
            {errorLoader ? <h3>{error}</h3> : null}
            {
              data ? (
              <div>
                {
                  prettier ? <JSONPretty json={data}/>:<button className="bg-blue-700 text-white font-semibold p-2 m-2 rounded-md" onClick={()=> setPrettier(prettier ? false : true)}>Prettier</button>
                }
              
              <button onClick={()=>{ 
                  setButtonClick(buttonClick ? false : true);
                  convertXML();
              }} 
              className="bg-blue-700 text-white font-semibold p-2 my-2 rounded-md">
                Download XML
              </button>
              </div>

              ): null
            }
          </div>
        </>
     );
}
 

export default JS_to_XML