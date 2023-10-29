import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Carousel from './Carousel';
import Footer from './Footer';
const AfterNav = () => {

  return (
    <>
    <div className='bg-black'>
        <nav className="navbar navbar-expand-lg shadow-lg p-4  " style={{ backgroundColor: 'black' }}>
  <div className="container-fluid" >
    <a className="navbar-brand" href="/" style={{color:'#F78CA2',fontSize:'50px'}}><b><i>TUNING</i></b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{color:'#F78CA2',fontSize:'30px'}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/liked" style={{color:'#F78CA2',fontSize:'30px'}}>Liked Songs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/addmusic" style={{color:'#F78CA2',fontSize:'30px'}}>Add Music</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/contact' style={{color:'#F78CA2',fontSize:'30px'}}>Contact Us</a>
        </li>
      </ul>
      <div className='buttons d-flex justify-content-center'>
          <Link to="/logout" className='btn btn-dark me-4 rounded-pill px-4 py-2'>Logout</Link>
          <Link to="/profile" className='btn btn-dark me-4 rounded-pill px-4 py-2'>Profile</Link>
                            
        </div>
    </div>
  </div>
</nav>
<Carousel />
<Footer />
</div>
    </>
  )
}

export default AfterNav