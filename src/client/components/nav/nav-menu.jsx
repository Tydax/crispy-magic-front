import React, { PropTypes } from 'react';

// TODO add key
const NavMenuItem = ({ item }) => <a className='nav-butt' href={item.route}><li>{item.label}</li></a>;

// Route objects are used to create the items in the menu
NavMenuItem.propTypes = {
  item: React.PropTypes.shape({
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

const NavMenu = ({ items }) => (
  <div className='nav-menu-cont'>
    <ul className='nav-menu'>
      {items.map(item => <NavMenuItem item={item} />)}
    </ul>
  </div>
);

NavMenu.propTypes = {
  items: React.PropTypes.arrayOf(NavMenuItem.propTypes.item).isRequired,
};

export default NavMenu;
