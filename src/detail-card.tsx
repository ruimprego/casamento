import React from 'react';
import './detail-card.css';

function DetailCard(props : any) {
    return (
        <div key={props.id} className="card">
            <img className="detail-image" src={props.place.image} alt={props.place.text} />
            <span className="card-title">{props.place.title}</span>
            <span className="card-text">{props.place.text}</span>
            <a  href={props.place.location} className="card-link">Direções</a>
        </div>
    )
}

export default DetailCard;