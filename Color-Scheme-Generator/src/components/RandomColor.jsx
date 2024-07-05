import React, { useState } from "react";
import "../App.css";
//

const RandomColor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");


  const randomUtility=(len)=>{
    return Math.floor(Math.random()*len)
  }
  const generateColor =()=>{

    if(type === 'hex'){
        // #242424
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = '#';
        for(let i = 0; i< 6; i++){
            hexColor += hex[randomUtility(hex.length)];
        }
        console.log(hexColor)
        setColor(hexColor)
    }else if(type === 'rgb'){
        const r = randomUtility(256);
        const g = randomUtility(256);
        const b = randomUtility(256);
        const col = `rgb(${r},${g},${b})`
        console.log(col)
        setColor(col)
    }
  }


  return (
    <div style={{
        height:"100vh",
        width: "100vw",
        background: color
    }}>
      <div className="container">
        <button onClick={() => setType("hex")}>Hex Color</button>
        <button onClick={() => setType("rgb")}>RGB Color</button>
        <button
          onClick={generateColor}
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            color: 'beige',
            fontSize: '60px',
            marginTop: '50px',
            flexDirection:'col',
            gap:'20px'
        }}
      >
        <h3>{type === 'rgb' ? 'RGB Color' : 'HEX Color'} </h3>
        <h6>{color}</h6>
      </div>
    </div>
  );
};

export default RandomColor;
