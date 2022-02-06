import React from 'react';
import DetailCard from './detail-card';
import igreja from './assets/igreja.jpg';
import quinta from './assets/quinta.png';import './content.css';
import translate from './translate';
import reception from './assets/reception.png';

function Content() {
    const tp = translate.use().theParty;

    const APP_CONST = {
        content: [
            {
                title: tp.receptionTitle,
                image: reception,
                text: tp.receptionName,
                location: 'https://goo.gl/maps/NDbog8HmPgqcxxMo9',
                arrivalHour: '11:00',
                description: ''
            },
            {
                title: tp.churchTitle,
                image: igreja,
                text: tp.churchName,
                location: 'https://goo.gl/maps/F9goAoJCapWeCt987',
                arrivalHour: '12:30',
                description: ''
            },
            {
                title: tp.restaurantTitle,
                image: quinta,
                text: tp.restaurantName,
                location: 'https://goo.gl/maps/ykAxJgn1qraWu8wh6',
                description: ''
            }
        ]
    }

    return (
        <div className="content-container">
            <div className="content-confirmation">{tp.confirmation}</div>
            <div className="content-title">{tp.title}</div>
            <div className="card-container">
                {APP_CONST.content.map((place, i) => <DetailCard place={place} key={i}/>)}
            </div>
        </div>
    )
}

export default Content;