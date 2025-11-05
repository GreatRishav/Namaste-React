import React from 'react'
import ReactDOM from 'react-dom'
import ResturantCard from '../ResturantCard/ResturantCard'
import Res from '../../utils/mock_data'
import {Search} from 'lucide-react'
import { useState } from 'react'
import './style.css'

const Body = ()=>
{
 
    const [listOfRes,setListOfRes] = useState(Res);
    const [filterOfRes,setFilterOfRes] = useState(Res);
    const filteredData = listOfRes.filter(ele => ele.resStar>4.3)
    const dataExists = (text)=> listOfRes.some(ele => ele.resName === text);
    function Searching(searchText)
    {
        if(searchText == '')
        {
          alert('Enter Something');
          return;
        }
        if(!dataExists(searchText))
        {
          alert('Enter a valid Resturant');

        }
        else
        {
          setFilterOfRes(listOfRes.filter(ele => ele.resName === searchText))
        }

        
    }
    return (
        <>
            <div className="body">
                <div className="button-containers">
                  <button className='top-Rated' onClick={()=>setFilterOfRes(filteredData)}>Top Rated</button>
                  <div className="search">
                    <input type="text" placeholder='search' id='searchText'/>
                    <div className="search-icon" onClick={()=>
                      {
                        let searchText = document.getElementById('searchText').value;
                        Searching(searchText);
                      }
                    }><Search size={20}></Search></div>
                  </div>
                </div>
                <div className='res-container'>
                    {
                        filterOfRes.map((ele)=>
                        (
                            <ResturantCard key = {ele.id} ele = {ele}></ResturantCard>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Body;