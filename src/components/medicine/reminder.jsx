import React,{useState} from "react";
import "./medicine.css";
import ME from "../../assets/amal.jpg";
import BACK from "../../assets/back.svg";
import MED from "../../assets/medicine.svg";
import { BsFillPlusSquareFill } from "react-icons/bs";

const medicineSchedules=[];
export default function Reminder(){
  const [openPopup,setOpenPopup] =useState(false);  
  const[selectvalue,setSelectvalue] = useState("");
  const[number,setNumber] = useState("");
  const[DateTime,setDateTime] = useState("");
  console.log(selectvalue,number,DateTime);
  function handleSubmit(e){
    e.preventDefault();
    medicineSchedules.push({
      sv:selectvalue,
      nu:number,
      dt:DateTime
    })
    console.log(medicineSchedules)
    setSelectvalue("");
    setNumber("");
    setDateTime("");
    setOpenPopup(false);

  }
  return (
    <div className="reminder-wrapper">
      {openPopup && <div className="remainderAddPopup">
        <div className="remainderAddPopupInnerWrapper">
          <div className="nav">
            <img className="image" src={BACK} alt="" />
            <h1>Medicine Reminder</h1>
            <img className="image-me" src={ME} alt="" />
          </div>
          <div className="overlap-container-input-medicine">
            <form className="input-box-medicine" onSubmit={handleSubmit}>
              <div>
                <select name="pets" id="pet-select" onChange={(e)=>{setSelectvalue(e.target.value)}}>
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
                  onChange={(e)=>{setNumber(e.target.value)}}
                />
              </div>

              <input type="datetime-local" id="Test_DatetimeLocal" onChange={(e)=>{setDateTime(e.target.value)}}/>
              <input type="submit" value="submit" style={{color:"white"}}/>
            </form>
          </div>
        </div>
      </div>}
      <div className="nav">
        <img className="image" src={BACK} alt="" />
        <h1>Medicine Reminder</h1>
        <img className="image-me" src={ME} alt="" />
      </div>
      <div className="medicine-wrapper">
        <div className="medicinereminder">
          <div>
            <img className="image-med" src={MED} alt="" />
          </div>
          <div className="medicine-name">
            <div>
              <h2>Paracetamol</h2>
            </div>
            <div className="medicine-name-sub">
              <h5>1 pill</h5>
              <h5>9am|1pm|7pm</h5>
            </div>
          </div>
        </div>
        <div className="medicinereminder">
          <div>
            <img className="image-med" src={MED} alt="" />
          </div>
          <div className="medicine-name">
            <div>
              <h2>Amoxziline</h2>
            </div>
            <div className="medicine-name-sub">
              <h5>1 pill</h5>
              <h5>1pm</h5>
            </div>
          </div>
        </div>
        {
          medicineSchedules.map((med)=>(
            <div className="medicinereminder">
          <div>
            <img className="image-med" src={MED} alt="" />
          </div>
          <div className="medicine-name">
            <div>
              <h2>{med.sv}</h2>
            </div>
            <div className="medicine-name-sub">
              <h5>{med.nu}</h5>
              <h5>{med.dt}</h5>
            </div>
          </div>
        </div>
          ))
        }
        <div>
          <BsFillPlusSquareFill className="plus-button-plus" onClick={(e)=>{setOpenPopup(true)}}/>
        </div>
      </div>
    </div>
  );
};
