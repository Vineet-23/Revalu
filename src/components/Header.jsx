import React from 'react'
import './styles.css'
import { GiFlowerEmblem } from 'react-icons/gi'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='logo'>
          <img src='https://i.postimg.cc/CMWvMxJg/image.png' />'
        </div>
        <nav>
          <ul>
            <li>
              <a href='#'>Materials</a>
            </li>
            <li>
              <a href='#'>Elements</a>
            </li>
            <li>
              <a href='#'>Projects</a>
            </li>
            <li>
              <a href='#'>Manufacturers</a>
            </li>
            <li>
              <a href='#'>Collections</a>
            </li>
          </ul>
        </nav>
        <div className='user-profile right-corner'>
          <img src='https://i.postimg.cc/vHZKDZ62/image.png' />
        </div>
      </div>
    </header>
  )
}

export default Header
