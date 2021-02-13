import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Header.css'

function Header() {
    const [timer,setTimer]= useState(new Date())
    useEffect(()=>{
        const timeInterval = setInterval(()=>{
            setTimer(new Date())

            return ()=>{
                clearInterval(timeInterval)
            }
        } ,1000)   
    }, [timer])
    return (
        <div>
            <nav>
                <div className='nav-title'>Space X <i class="fa fa-rocket" aria-hidden="true"/></div>
                <div className='nav-timer'>{timer.toLocaleTimeString()}</div>
            </nav>
        </div>
    )
}

export default Header
