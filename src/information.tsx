import React from "react";
import './information.css';
import translate from "./translate";
import DetailCard from './detail-card';
import hotel from './assets/hotel.jpg';
import sbart from './assets/sbart.png';
import ddinis from './assets/ddinis.jpg';
import spaio from './assets/spaio.png';

function Information() {
    const i = translate.use().information;

    const HOTEL_CONST = {
        content: [
            {
                title: i.hotelTitle,
                image: hotel,
                location: 'https://goo.gl/maps/p2TN1vHBtvMDXy8N9',
                description: i.hotelDescription,
                phone: '(+351) 271 829 200',
                site: 'https://www.hotel-trancoso.com/'
            },
            {
                title: i.hotel2Title,
                image: sbart,
                location: 'https://goo.gl/maps/Qp6ensj7KbmtwLj69',
                description: i.hotel2Description,
                phone: '(+351) 96 49 94 907',
                site: 'https://www.saobartolomeu.pt/'
            }
        ]
    }

    const OTHERS = {
        content: [
            {
                title: 'Residencial D. Dinís',
                image: ddinis,
                location: 'https://goo.gl/maps/RKtGTiJTu3Kprm1e6'
            },
            {
                title: 'Solar Sampaio e Melo',
                image: spaio,
                location: 'https://g.page/solarsampaioemelo?share'
            }
        ]
    }

    return <div className="info-container">
        <span className="info-title">{i.title}</span>
        <div className="info-description">{i.description}</div>
        <div>
            {HOTEL_CONST.content.map((place, i) => <DetailCard place={place} key={i}/>)}
        </div>
        <span className="info-description">{i.description2}</span>
        <div>
            {OTHERS.content.map((place, i) => <DetailCard place={place} key={i} />)}
        </div>
    </div>
}

export default Information;