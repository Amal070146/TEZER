import React from "react";
import "./medicine.css";
import ME from "../../assets/amal.jpg";
import BACK from "../../assets/back.svg";
import MED from "../../assets/medicine.svg";
import { BsFillPlusSquareFill } from "react-icons/bs";

const reminderinput = () => {
  return (
    <div className="reminder-wrapper">
      <div className="nav">
        <img className="image" src={BACK} alt="" />
        <h1>Medicine Reminder</h1>
        <img className="image-me" src={ME} alt="" />
      </div>
      <div className="overlap-container-input-medicine">
        <div className="input-box-medicine">
          <div>
            <select name="pets" id="pet-select">
              <option value="">Select the medicine</option>
              <option value="Paracetamol">Paracetamol</option>
              <option value="Dolo">Dolo</option>
              <option value="Decadron">Amoxziline</option>
              <option value="Yohimbe">Yondelis</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              id="pill_no"
              name="pill_no"
              placeholder="No: of Pills"
            />
          </div>

          <input type="datetime-local" id="Test_DatetimeLocal" />
        </div>
      </div>
    </div>
  );
};

export default reminderinput;
