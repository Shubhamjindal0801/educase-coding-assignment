import React, { useEffect, useState } from 'react'
import './styles.css'
import img from '../../asssets/Ellipse 114@2x.png'
import camImg from '../../asssets/Group 1585@2x.png'
import logoutIcon from '../../asssets/logoutIcon.svg'
import { toast } from 'react-toastify'

function Index() {
    const userData = JSON.parse(localStorage.getItem('PopXUser'))
    const name = (userData.name.substring(0,1).toUpperCase())+userData.name.substring(1)
    const email = (userData.email.substring(0,1).toUpperCase())+userData.email.substring(1)

    function handleLogout(){
        localStorage.removeItem('PopXUser')
        toast.success('User logged out')
        setTimeout(()=>{
            window.location.href = '/'
        },1500)
    }

    return (
        <div className='container-dash'>
            <div className='dashboard-header'>
                <p className='dashboard-title'>Account Setting</p>
                <img src={logoutIcon} onClick={()=>handleLogout()}/>
            </div>
            <div className='user-details-container'>
                <div className="user-profile-container">
                    <div className="profile-image-container">
                        <img
                            src={img}
                            alt="User Profile"
                            className="profile-image"
                        />
                        <div className="camera-icon">
                            <img src={camImg} />
                        </div>
                    </div>
                </div>
                {
                    userData ?
                        <div className='user-details'>
                            <p style={{fontWeight:'bold'}}>{name}</p>
                            <p>{email}</p>
                        </div>
                        :<></>
                }
            </div>
            <div className='dashboard-content'>
                <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </div>
        </div>
    )
}

export default Index