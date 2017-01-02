import React, { PropTypes } from 'react';
import { Images } from '../../../shared/constants';

const NavSearchBarInput = ({ value }) => (
  <input className='field' type='search' placeholder='Rechercher des cartes...' value={value} />
);

NavSearchBarInput.propTypes = {
  value: React.PropTypes.string,
};

const NavSearchButton = () => (
  <button className='search-button'>
    <img src={Images.magnifyingIcon} alt='Search'/>
  </button>
);

const NavSearchBar = ({ value }) => (
  <div className='nav-search'>
    <NavSearchBarInput value={value} />
    <NavSearchButton />
  </div>
);

NavSearchBar.propTypes = {
  value: NavSearchBarInput.propTypes.value,
};

export default NavSearchBar;
