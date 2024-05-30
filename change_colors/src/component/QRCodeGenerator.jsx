import QRCode from "react-qr-code";
import { useState } from 'react';

const QRCodeGenerator = () => {

  const[name,setName] = useState('');
  const[input,setInput] = useState('');


  return (
    <div className="text-center">
        QRCode Generator
        <div className="flex justify-center">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "20%", width: "20%" }}
            value={name}
            viewBox={`0 0 256 256`}
          />
        </div>
        <input type='text' placeholder="Enter your name" className="border-2 mx-3 rounded-md px-2 py-1"
          onChange={(e)=>{
            setInput(e.target.value);
          }}
        />
        <button className="bg-red-300 rounded-md py-1 px-2 mt-4"
        onClick={()=>setName(input)}>
          Generate
       </button>
    </div>
  )
}

export default QRCodeGenerator