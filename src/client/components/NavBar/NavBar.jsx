import React from 'react';

import { Routes } from '../../../shared/constants';
import NavSearchBar from './nav-search-bar';
import NavMenu from './nav-menu';
import NavProfile from './nav-profile';

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
