import React from 'react'
import './LaunchCard.css'

function LaunchCard(props) {
    return (
            <div className='lc-main'>
                <div className='lc-banner'>
                    <img src={props.banner} alt=''/>
                </div>
                <div className='lc-information'>
                    <div className='lc-header'>
                        <div className='lc-title'>
                            {props.missionName}
                        </div>
                        <div className='lc-date'>
                            {props.launchDate}
                        </div>
                    </div>
                    <div className='lc-details'>
                        {props.details}
                    </div>
                </div>
            </div>
    )
}

export default LaunchCard
