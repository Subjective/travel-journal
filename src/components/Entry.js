import * as React from "react"
import locationIcon from "../images/location-icon.svg"

export default function Entry(props) {
    return (
        <section className="entry--section">
            <div className="entry">
                <div className="entry--flex">
                    <img src={props.img} className="entry--image" /> 
                    <div className="entry--info">
                        <div className="entry--info-topbar">
                            <div className="location-icon-div">
                                <img src={locationIcon} className="entry--location-icon" />
                            </div> 
                            <p className="entry--location">{props.location.toUpperCase()}</p>
                            <p className="entry--map-url"><a href={props.mapUrl}>View on Google Maps</a></p>
                        </div>
                        <h1 className="entry--title">{props.title}</h1>
                        <h2 className="entry--dates">{props.startDate} - {props.endDate}</h2>
                        <p>{props.description}</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        </section>
    )
}