import React from 'react';
import northernPic from './image/northernPic.jpeg';
import southernPic from './image/southernPic.jpeg';

const hemisDisplay = ({latitude}) => {

    const hemisphere = latitude > 0 ? 'It is the northern hemisphere' : 'It is the southern hemisphere';
    const picture = latitude > 0 ? northernPic : southernPic;

    return (
        <div className='general'>
            <div className="container">
            <div className="image">
            <img src={picture} alt= "" width={400}/>
            </div>
            </div>
            <div className="text">
             {hemisphere}
               </div>
        </div>
    )

}

export default hemisDisplay;