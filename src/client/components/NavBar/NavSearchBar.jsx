import React, { PropTypes } from 'react';
import { Images } from '../../../shared/constants';

const NavSearchBarInput = function NavSearchBarInput({ value }) {
  return (
    <input className='field' type='search' placeholder='Rechercher des cartes...' value={value} />
  );
};

NavSearchBarInput.propTypes = {
  value: PropTypes.string,
};

const NavSearchButton = function NavSearchButton() {
  return (
    <button className='search-button' type="submit">
      <div className='icon'></div>
    </button>
  );
};

const NavSearchBar = function NavSearchBar({ value }) {
  return (
    <li className='menu-item nav-search'>
      <NavSearchBarInput value={value} />
      <NavSearchButton />
    </li>
  );
};

NavSearchBar.propTypes = {
  value: NavSearchBarInput.propTypes.value,
};

export default NavSearchBar;
