import React from 'react';
import './detail-card.css';

function DetailCard(props : any) {
    console.log(props.place.image);
    return (
        <div key={props.id} className="card">
            <span className="card-title">{props.place.text}</span>
            <img className="detail-image" src={props.place.image} />
            <a className="card-link" href={props.place.location}>Direções</a>
        </div>
    )
}

export default DetailCard;