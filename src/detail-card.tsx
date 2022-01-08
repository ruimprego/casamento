import React from 'react';
import './detail-card.css';
import mapIcon from './assets/map.svg'

function DetailCard(props : any) {
    return (
        <div key={props.id} className="card">
            <img className="detail-image" src={props.place.image} alt={props.place.text} />
            <span className="card-cell">
                <span className="card-title">{props.place.title}</span>
                <span className="card-text">{props.place.text}</span>
                <a  href={props.place.location} className="card-link"><img className="map-icon" src={mapIcon} />Direções</a>
            </span>
        </div>
    )
}

export default DetailCard;