import React from 'react';
import DetailCard from './detail-card';
import APP_CONST from './ApplicationConstant';
import './content.css';

function Content() {
    return (
        <div className="content-container">
            <div className="card-container">
                {APP_CONST.content.map((place, i) => <DetailCard place={place} id={i}/>)}
            </div>
        </div>
    )
}

export default Content;