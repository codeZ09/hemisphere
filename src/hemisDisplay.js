import React from 'react';
import northernPic from './image/northernPic.jpeg';
import southernPic from './image/southernPic.jpeg';

const hemisDisplay = ({latitude}) => {

    const hemisphere = latitude > 0 ? 'Northern hemisphere' : 'Southern hemisphere';
    const picture = latitude > 0 ? northernPic : southernPic;

    return (
        <div>
            <div className="image">
            <img src={picture} alt= "" />
            </div>
        <div className="text">
        {hemisphere}
        </div>
        </div>
    )

}

export default hemisDisplay;