import React from 'react'
import './profile.css'
import ME from '../../assets/amal.jpg'
import HEART from '../../assets/heart.png'
import LAB from '../../assets/lab-report.svg'
import MED from '../../assets/medicine.svg'
import {useNavigate} from 'react-router-dom';

export default function Profile(){
  const navigate = useNavigate();
  return (
    <div className='profile-wrapper'>
        <div className='header-text'>
            <h2>Gud Morning,</h2>
            <h1>Amal C P</h1>
        </div>
        <div className='profile-image-wrapper'>
            <img className='one' src={ME} alt="" />
            {/* <img className='two' src={HEART} alt="" /> */}
        </div>
        <div className='option-lab-med'>
            <div className='option-lab-med-t'onClick={(e)=>{navigate('/profile/reportvalues')}}><h3>Lab Report Analyser</h3><img src={LAB} alt="" /></div>
            <div className='option-lab-med-t'><h3 onClick={(e)=>{navigate('/profile/medicinereminder')}}>Medicine Reminder</h3><img src={MED} alt="" /></div>
        </div>
    </div>
  )
}