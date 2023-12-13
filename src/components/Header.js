import React from 'react'
import "./Header.css"

const Header = ({black}) => {
  return (
    <header className={black ? "black" : ""}>
        <div className='header--logo'>
            <a href='/'>
                <img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'/>
            </a>
        </div>
        <div className='header--user'>
            <a href='/'>
                <img src='https://projeto-netflix-chi.vercel.app/img/6759280.png'/>
            </a>
        </div>
    </header>
  )
}

export default Header