// we need to create single as well as multiple selection accordian
import data from "./data";
import "./style.css";

import { useState } from "react";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingle = (currentId) => {
    console.log("current selected", currentId);
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultiSelection = (currentId) => {
    console.log(currentId);
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
        cpyMultiple.push(currentId); // Correctly push currentId
    } else {
        cpyMultiple.splice(findIndexOfCurrentId, 1); // Correctly remove currentId
    }
    setMultiple(cpyMultiple);
};

  console.log(multiple, selected);


  const handleButtonClick = () => {
    setSelected(null);
    setMultiple([])
    setMultiSelection(!multiSelection);
  };
  return (
    <>
      <div className="wrapper">
        <button onClick={handleButtonClick}>Enable Multi-Selection</button>
        <div className="Accordian">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className="item">
                <div
                  onClick={() =>
                    multiSelection
                      ? handleMultiSelection(item.id)
                      : handleSingle(item.id)
                  }
                  className="title"
                >
                  <h3>{item.title}</h3>
                  <span>+</span>
                </div>
                {multiSelection
                  ? multiple.indexOf(item.id) !== -1 && (
                      <div className="content">{item.content}</div>
                    )
                  : selected === item.id && (
                      <div className="content">{item.content}</div>
                    )}
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordian;
