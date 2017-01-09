import React, { PropTypes } from 'react';

const NavMenuItem = function NavMenuItem({ item }) {
  return (
    <li className='menu-item nav-button'>
      <a className='link' href={item.route}>{item.label}</a>
    </li>
  );
};

// Route objects are used to create the items in the menu
NavMenuItem.propTypes = {
  item: PropTypes.shape({
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

const NavMenu = function NavMenu ({ items }) {
  return (
    <div className='nav-menu'>
      <ul className='menu-list'>
        {items.map(item => <NavMenuItem key={item.label} item={item} />)}
      </ul>
    </div>
  );
};

NavMenu.propTypes = {
  items: PropTypes.arrayOf(NavMenuItem.propTypes.item).isRequired,
};

export default NavMenu;
