import React, { PropTypes } from 'react';

const NavSearchBarInput = ({ value }) => (
  <input className='field' type='search' placeholder='Rechercher des cartes...' value={value} />
);

NavSearchBarInput.propTypes = {
  value: React.PropTypes.string,
};

const NavSearchBar = ({ value }) => (
  <div className='nav-search'>
    <NavSearchBarInput value={value} />
  </div>
);

NavSearchBar.propTypes = {
  value: NavSearchBarInput.propTypes.value,
};

export default NavSearchBar;
