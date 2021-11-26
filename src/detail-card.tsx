import React from 'react';
import './detail-card.css';

function DetailCard(props : any) {
    console.log(props.place.image);
    return (
        <div key={props.id}>
            <span>{props.place.text}</span>
            <img className="detail-image" src={props.place.image} />
            <a href={props.place.location}>Direções</a>
        </div>
    )
}

export default DetailCard;