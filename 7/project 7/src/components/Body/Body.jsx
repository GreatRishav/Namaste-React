import React, { useState, useEffect } from 'react';
import ResturantCard from '../ResturantCard/ResturantCard';
import { Search } from 'lucide-react';
import Shimmer from '../Shimmer/shimmer';
import './style.css';

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText,setSearchText] = useState('');
  const [filterOfRes, setFilterOfRes] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6015375&lng=88.38329689999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    const resList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRes(resList);
    setFilterOfRes(resList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = listOfRes.filter(ele => ele.info.avgRating > 4.3);

  if(listOfRes.length === 0)
  {
    return (<Shimmer></Shimmer>)
  }
  return (
    <div className="body">
      <div className="button-containers">
        <button className="top-Rated" onClick={() => setFilterOfRes(filteredData)}>
          Top Rated
        </button>
      <div className="search">
        <input type="text" placeholder='search' id='searchText' value = {searchText}
        onChange={(e)=>
        {
          setSearchText(e.target.value);
        }
        }/>
        <div className="search-icon" onClick={
          ()=>
          {
            return searchText === ''? setFilterOfRes(listOfRes) :
             setFilterOfRes(listOfRes.filter((ele)=>
            {
              const item = ele.info.name;
              return item.toLowerCase().includes(searchText.toLowerCase());
            }))
          }
        }><Search size={20}></Search></div>
      </div>

      </div>
      <div className="res-container">
        {filterOfRes.map(ele => (
          <ResturantCard key={ele.info.id} ele={ele} />
        ))}
      </div>
    </div>
  );
};

export default Body;
