import React from 'react';
import './detail-card.css';
import mapIcon from './assets/map.svg';
import translate from './translate';
import phoneIcon from './assets/phone.svg';
import cursorIcon from './assets/cursor.svg';
import clockIcon from './assets/clock.svg';

function DetailCard(props : any) {
    const dc = translate.use().theParty;

    let description;
    let text;
    let phone;
    let site;
    let arrivalHour;

    if (props.place.arrivalHour) {
        arrivalHour = <span className="arrival-hour"><img src={clockIcon} alt="arrival-hour" className="icon" /> {props.place.arrivalHour}</span>
    }

    if (props.place.description) {
        description = <div className="detail-description">{props.place.description.split('\n').map((item: any, key: any) => {
            return <span key={key}>{item}<br /></span>
        })}</div>
    }

    if (props.place.text) {
        text = <span className="card-text">{props.place.text}</span>;
    }

    if (props.place.site) {
        site = <a className="desc-link" href={props.place.site}><img className="icon" src={cursorIcon} alt="site" /> {props.place.site}</a>
    }

    if (props.place.phone) {
        phone = <span className="desc-phone"><img className="icon" src={phoneIcon} alt="phone-icon"/> {props.place.phone}</span>
    }

    return (
        <div key={props.id} className="card">
            <img className="detail-image" src={props.place.image} alt={props.place.text} />
            <span className="card-cell">
                <span className="card-title">{props.place.title}</span>
                {text}
                {description}
                {phone}
                {site}
                {arrivalHour}
                <a  href={props.place.location} className="card-link"><img className="map-icon" src={mapIcon} alt="directions" />{dc.directions}</a>
            </span>
        </div>
    )
}

export default DetailCard;