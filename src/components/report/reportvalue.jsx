import React from "react";
import "./report.css";
import ME from "../../assets/amal.jpg";
import BACK from "../../assets/back.svg";

const reportvalue = () => {
  return (
    <div className="reminder-wrapper ">
      <div className="nav">
        <img className="image" src={BACK} alt="" />
        <h1>Report Graph</h1>
        <img className="image-me" src={ME} alt="" />
      </div>
      <div className="report-pdf-choose">
        <div className="report-pdf-choose-mode">
          <h4>Choose the mode</h4>
          <div>
            <button className="btn-report-pdf">Enter Values</button>
            <button className="btn-report-pdf"> Use PDF</button>
          </div>
        </div>
        <div>
        <div>
          <select name="pets" id="pet-select">
            <option value="">Select the medicine</option>
            <option value="Paracetamol">Paracetamol</option>
            <option value="Dolo">Dolo</option>
            <option value="Decadron">Amoxziline</option>
            <option value="Yohimbe">Yondelis</option>
            
          </select>
        </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default reportvalue;
