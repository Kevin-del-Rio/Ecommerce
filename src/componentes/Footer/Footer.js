// import React, { Component } from 'react'
import './Footer.css';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa' ;
import { RiCopyrightLine } from 'react-icons/ri';

const Footer = () => {  
    return (
      <section className='Footer'>
        <div className='Social'>
          <a href='/'><i className='social'><FaTwitter/></i></a>
          <a href='/'><i className='social'><FaInstagram/></i></a>
          <a href='/'><i className='social'><FaFacebookF/></i></a>       
        </div>

        <ul className='lista'>
          <li>
            <a href='*'>Home</a>
          </li>
          <li>
            <a href='*'>Contacto</a>
          </li>
          <li>
            <a href='*'>Cuadros</a>
          </li>         
        </ul>
        <p className='Copyrigth'>        
           LA CUADRERIA .     
          <RiCopyrightLine />
        </p>
        
      </section>
    )

}
export default Footer