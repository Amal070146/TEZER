import React from "react";
import "./home.css";
import { BiDownArrow } from "react-icons/bi";
import {useNavigate} from 'react-router-dom'


const home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter"> TETRA</h3>
          </div>
        </div>
        <div>
            <BiDownArrow className="scroll_down" onClick={(e)=>{navigate("/login")}}/>
        </div>
        
      </div>
    </div>
  );
};

export default home;
