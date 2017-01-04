import React from 'react';

import { Routes } from '../../../shared/constants';
import NavSearchBar from './NavSearchBar';
import NavMenu from './NavMenu';
import NavProfile from './NavProfile';

const NavAppTitle = () => (
  <h1 className='app-title nav-button'>
    <a className='link' href={Routes.home}>Crispy Magic</a>
  </h1>
);

const menuItems = [{
    label: 'Ma bibliothèque',
    route: Routes.myLibrary,
  }, {
    label: 'Mes decks',
    route: Routes.myDecks,
  },
];

const NavBar = ({ searchValue, loggedUser }) => (<nav className='nav-bar'>
  <NavAppTitle />
  <NavSearchBar value={searchValue} />
  <NavMenu items={menuItems}/>
  <NavProfile user={loggedUser}/>
</nav>);

export default NavBar;
