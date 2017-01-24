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
    <button className='search-button'>
      <img src={Images.magnifyingIcon} alt='Search'/>
    </button>
  );
};

const NavSearchBar = function NavSearchBar({ value }) {
  return (
    <div className='element nav-search'>
      <NavSearchBarInput value={value} />
      <NavSearchButton />
    </div>
  );
};

NavSearchBar.propTypes = {
  value: NavSearchBarInput.propTypes.value,
};

export default NavSearchBar;
