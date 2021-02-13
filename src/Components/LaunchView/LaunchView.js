import Axios from 'axios'
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Gallery from './Gallery/Gallery'
import './LaunchView.css'

export class LaunchView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             getValue:{
                 rocket:{},
                 links:{
                     flickr_images:[]
                 }
             }
        }
    }
    componentDidMount(){
        const flightNo = this.props.match.params.flight_number
        Axios.get('https://api.spacexdata.com/v3/launches/'+ flightNo)
        .then(res => this.setState({
            getValue: res.data
        }))
        .catch(error => error)
    }
    render() {
        const {flight_number, mission_name, launch_date_local, details}= this.state.getValue
        const {rocket_name}= this.state.getValue.rocket
        const {flickr_images}= this.state.getValue.links
        console.log(this.state.getValue.links.flickr_images)
        return (
            <div>
                {flickr_images.length > 0 ? <Gallery images={flickr_images}/> : null}
                <div class="table-wrapper">
                    <table class="fl-table">
                        <thead>
                            <tr>
                                <th>TITLE</th>
                                <th>INFO</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='tb-line'>Flight Number</td>
                                <td>{flight_number}</td>
                                
                            </tr>
                            <tr>
                                <td className='tb-line'>Mission Name</td>
                                <td>{mission_name}</td>
                                
                            </tr>
                            <tr>
                                <td className='tb-line'>Rocket Name</td>
                                <td>{rocket_name}</td>
                                
                            </tr>
                            <tr>
                                <td className='tb-line'>Launch Date</td>
                                <td>{launch_date_local}</td>
                            </tr>
                            <tr>
                                <td className='tb-line'>Details</td>
                                <td className='lv-details'>{details ? details : 'No Details Available'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(LaunchView)
