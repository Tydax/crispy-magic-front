import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { Routes } from '../../../shared/constants';
import NavSearchBar from '../../containers/NavSearchBar';
import NavProfile from './NavProfile';

const otherMenuItemsPropTypes = {
  item: PropTypes.shape({
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
};

const propTypes = {
  otherMenuItems: PropTypes.arrayOf(otherMenuItemsPropTypes.item),
  user: PropTypes.shape({}),
};

const defaultProps = {
  // otherMenuItems: [{
  //     label: 'Ma bibliothèque',
  //     route: Routes.myLibrary,
  //   }, {
  //     label: 'Mes decks',
  //     route: Routes.myDecks,
  //   },
  // ],
  otherMenuItems: [{
      label: 'Deckbuilder',
      route: Routes.deckBuilder,
    },
  ],
};

class NavBar extends React.Component {
  renderAppTitle() {
    return (
      <li className='menu-item'>
        <h1 className='app-title nav-button'>
          <Link className='link' to={Routes.home}>Crispy Magic</Link>
        </h1>
      </li>
    );
  }

  renderOtherMenuItems() {
    const NavMenuItem = ({ item }) => (
      <li className='other-menu-item nav-button'>
        <Link className='link' activeClassName="-active" to={item.route}>{item.label}</Link>
      </li>
    );

    return this.props.otherMenuItems.map(item => <NavMenuItem key={item.label} item={item} />);
  }

  render() {
    const appTitle = this.renderAppTitle();
    const menuItems = this.renderOtherMenuItems();
    return (
      <nav className='nav-bar'>
        <ul className='menu-list'>
          {appTitle}
          <NavSearchBar />
          <li className='menu-item'>
            <ul className='other-menu-list'>
              {menuItems}
            </ul>
          </li>
          <NavProfile user={this.props.loggedUser}/>
        </ul>
      </nav>
    );
  }
};

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
