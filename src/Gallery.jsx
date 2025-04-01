import { use, useState } from "react";
import { sculptureList } from "./data.js";
import "./App.css";

export default function Gallery() {
  const totalAmount = sculptureList.length;
  const [number, setNumber] = useState(0);
  let [detail, setDetail] = useState(true);
  function previousBtn() {
    if (number > 0) setNumber(number - 1);
  }
  function nextBtn() {
    if (number < 11) setNumber(number + 1);
  }
  function setDefault() {
    setDetail(false);
  }
  return (
    <div className="body">
      <div className="main-section">
        <h3>{sculptureList[number].name}</h3>
        <p>
          ({number + 1} of {totalAmount})
        </p>
      </div>
      <div className="content">
        <button id="detailBtn" onClick={() => setDetail(!detail)}>
          Show details
        </button>
        {detail && (
          <p className="detail-content">{sculptureList[number].description}</p>
        )}

        <img
          src={sculptureList[number].url}
          alt={sculptureList[number].alt}
          width="100px"
        />
        <div className="button">
          <button
            className="previous"
            onClick={() => {
              previousBtn();
              setDefault();
            }}
          >
            Previous
          </button>
          <button
            className="next"
            onClick={() => {
              nextBtn();
              setDefault();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
