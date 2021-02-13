import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import LaunchCard from '../LaunchCard/LaunchCard'
import {Link} from 'react-router-dom'
import './LaunchList.css'

function LaunchList() {
    const [data, setData]= useState([])
    const [errorMsg, setErrorMsg]= useState('')
    useEffect(()=>{
        Axios.get('https://api.spacexdata.com/v3/launches')
        .then(res => setData(res.data))
        .catch(error => setErrorMsg('NO INFORMATTION PROVIDED'))
    })
    const showData=()=>{
        const LaunchComponent = data.map((item, index) => {
            return(
                <div className='ll-main'>
                <Link to={'/launch/'+item.flight_number} key={index} className='ll-link'>
                <LaunchCard
                key={index}
                banner={item.links.mission_patch} 
                missionName={item.mission_name} 
                launchDate={item.launch_date_local} 
                details={item.details}
                />
                </Link>
                </div>
            )
        })

        return LaunchComponent
    }
    return (
        <div>
            {
                errorMsg ? errorMsg : showData()
            }
        </div>
    )
}

export default LaunchList
