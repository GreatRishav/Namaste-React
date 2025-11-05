import React from 'react'
import { Star } from 'lucide-react';
import './styles.css'

const ResturantCard = ({ele}) => {
  return (
    <div className='res-card'>
        <div className='res-image'><img src={ele.resImg} alt="" /></div>
        <ul className="resc-desc">
            <li><h3>{ele.resName}</h3></li>
            <li><h4>{ele.resFood}</h4></li>
            <li className='star-section'>
                <div className="star-icon"><Star /></div>
                <div className="star-dsc">{ele.resStar}</div>
            </li>
            <li>{ele.resTime}</li>
        </ul>
    </div>
  )
}

export default ResturantCard;
