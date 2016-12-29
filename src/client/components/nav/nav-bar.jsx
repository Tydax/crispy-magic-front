import React from 'react';

import { Routes } from '../../../shared/constants';
import NavSearchBar from './nav-search-bar';
import NavMenu from './nav-menu';
import NavProfile from './nav-profile';

const NavAppTitle = () => <a className='nav-butt' href={Routes.home}><h1 className='app_title'>Crispy Magic</h1></a>;

const menuItems = [{
    label: 'Ma bibliothèque',
    route: Routes.myLibrary,
  }, {
    label: 'Mes decks',
    route: Routes.myDecks,
  },
];

const NavBar = ({ searchValue, loggedUser }) => (<nav className='nav-bar-cont'>
  <NavAppTitle />
  <NavSearchBar value={searchValue} />
  <NavMenu items={menuItems}/>
  <NavProfile user={loggedUser}/>
</nav>);

export default NavBar;
