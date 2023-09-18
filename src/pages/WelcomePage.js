import React, { useEffect } from 'react'
import HomepageComponent from '../components/WelcomePageComponent'

function WelcomePage() {
    useEffect(()=>{
        document.title = 'PopX - Welcome to PopX!'
    },[])
    return (
        <HomepageComponent />
    )
}

export default WelcomePage