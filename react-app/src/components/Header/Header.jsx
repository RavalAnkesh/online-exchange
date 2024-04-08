/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";



function Header(props) {

    const [loc, setLoc] = useState(null)
    const [showOver, setshowOver] = useState(false)

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/login');
    }

    let locations  = [
        {
            latitude: 20.9220,
            longitude: 70.3706,
            placeName: "Gir Somnath"
        },
        {
            "latitude": 21.5092,
            "longitude": 71.8571,
            "placeName": "Bhavnagar"
        },
       
        {
            latitude: 22.3039,
            longitude: 70.8022,
            placeName: "Porbandar"
        },
        {
            latitude: 22.2587,
            longitude: 71.1924,
            placeName: "Junagadh"
        },
        {
            latitude: 21.6238,
            longitude: 69.6210,
            placeName: "Jamnagar"
        },
        {
            latitude: 21.7689,
            longitude: 72.1489,
            placeName: "Diu"
        },
        {
            latitude: 21.6970,
            longitude: 72.9683,
            placeName: "Bhuj"
        },
        {
            latitude: 21.7041,
            longitude: 72.9662,
            placeName: "Kutch"
        },
        {
            latitude: 22.7130,
            longitude: 69.6693,
            placeName: "Gandhidham"
        },
        {
            latitude: 23.1718,
            longitude: 70.1840,
            placeName: "Kandla"
        },
        {
            latitude: 23.8493,
            longitude: 72.1269,
            placeName: "Ahmedabad"
        },
        {
            latitude: 22.2587,
            longitude: 71.1924,
            placeName: "Jamnagar"
        },
        {
            latitude: 23.0225,
            longitude: 72.5714,
            placeName: "Gandhinagar"
        },
        {
            latitude: 21.5998,
            longitude: 71.1941,
            placeName: "Dwarka"
        },

    ]

    return (
        <div className='header-container d-flex justify-content-between'>

            <div className="header">

                <Link className='links' to="/"> <IoHome /> HOME  </Link>
               
                <select  className="map" value={loc}onChange={(e) => {
                    localStorage.setItem('userLoc', e.target.value)
                    setLoc(e.target.value)

                }} >                {
                        locations.map((item, index) => {
                            return (

                                <option value={`${item.latitude},${item.longitude}`} >
                                    {item.placeName} 
                                </option>

                            )

                        })
                    }  
                </select>


                <input className='search'
                    type='text'
                    placeholder='Search Products.....'
                    value={props && props.search}
                    onChange={(e) => props.handlesearch && props.handlesearch(e.target.value)
                    }
                />
                <button className='search-btn' onClick={() => props.handleClick && props.handleClick()} > <FaSearch /> </button>
                 <div
                    onClick={() => {
                        setshowOver(!showOver)
                    }}
                    style={{
                        display: 'inline-block',
                        alignItems: 'center',
                        background: '#002f34',
                        width: '50px',
                        height: '50px',
                        color: 'white',
                        fontSize: '30px',
                        borderRadius: '100%',
                        cursor:'pointer',
                        marginLeft:'340px'
                    }} >  <TfiMenuAlt /> </div>
                 <div>

               </div>
{showOver && <div className="nav-container  p-4 absolute top-16 right-8">
    <div>
        {!!localStorage.getItem('token') &&
            <Link to="/add-product">
                <button className='showover text-black py-1  rounded'>ADD PRODUCT</button>
            </Link>}
    </div>
    <div>
        {!!localStorage.getItem('token') &&
            <Link to="/liked-products">
                <button className=' showover text-black  py-1  rounded '>FAVOURITES</button>
            </Link>}
    </div>
    <div>
        {!!localStorage.getItem('token') &&
            <Link to="/my-products">
                <button className='showover text-black  py-1  rounded '>MY ADS</button>
            </Link>}
    </div>
    <div>
        {!!localStorage.getItem('token') &&
            <Link to="/my-profile">
                <button className='showover text-black py-1  rounded '>MY PROFILE</button>
            </Link>}
    </div>
    <div>
        {!localStorage.getItem('token') ?
            <Link to="/login"> <button className='log '>LOGIN </button></Link>:
            <button className='showover text-black py-1  rounded' onClick={handleLogout}>LOGOUT</button>}
    </div>
</div>}

            </div>

           
        </div>
    )
}


export default Header;
