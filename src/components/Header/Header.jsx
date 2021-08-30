import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu.jsx';
import Title from '../Title/Title.jsx';
import Subtitle from '../Subtitle/Subtitle.jsx';

export default function Header() {

  return(
    <header>
      <div className="header-group">
          <Menu />
        <div className="header-main">
          <Title />
          <Subtitle />
        </div>
      </div>
    </header>
  )
}