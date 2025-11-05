import React from 'react'
import { Star } from 'lucide-react';
import './styles.css'



const ResturantCard = ({ele}) => {
  return (
    <div className='res-card'>
        <div className='res-image'><img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${ele.info.cloudinaryImageId}`} alt="" /></div>
        <ul className="resc-desc">
            <li><h3>{ele.info.name}</h3></li>
            <li><h4>{ele.info.cuisines[0]}</h4></li>
            <li className='star-section'>
                <div className="star-icon"><Star /></div>
                <div className="star-dsc">{ele.info.avgRating} stars</div>
            </li>
            <li>{ele.info.sla.deliveryTime} mins later</li>
        </ul>
    </div>
  )
}

export default ResturantCard;
