import React from 'react';
import './detail-card.css';

function DetailCard(props : any) {
    console.log(props.place.image);
    return (
        <div key={props.id} className="card">
            <span className="card-title">{props.place.title}</span>
            <span className="card-text">{props.place.text}</span>
            <span className="img-wrapper">
                <img className="detail-image" src={props.place.image} alt={props.place.text} />
            </span>
            <a className="card-link" href={props.place.location}>Direções</a>
        </div>
    )
}

export default DetailCard;