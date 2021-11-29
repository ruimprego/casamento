import React from 'react';
import DetailCard from './detail-card';
import APP_CONST from './ApplicationConstant';
import './content.css';

function Content() {
    return (
        <div className="content-container">
            <span className="info">Informações</span>
            <div className="header">
                <div className="title">Trancoso</div>
                <div className="date">30 de Abril</div>
                <div className="hour">12:00</div>
            </div>
            <div className="card-container">
                {APP_CONST.content.map((place, i) => <DetailCard place={place} id={i}/>)}
            </div>
        </div>
    )
}

export default Content;