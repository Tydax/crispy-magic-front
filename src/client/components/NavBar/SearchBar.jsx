import React, { PropTypes } from 'react';
import { Images } from '../../../shared/constants';

const propTypes = {
  value: PropTypes.string,
  onChangeValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
  value: '',
};

const SearchBar = function SearchBar({ value, onChangeValue, onSubmit }) {
  return (
    <li className='menu-item nav-search'>
      <form className='form-search' onSubmit={event => onSubmit(event, value)}>
        <input className='field' type='search' placeholder='Rechercher des cartes...'
          onChange={evt => onChangeValue(evt.target.value)} />
        <button className='search-button' type="submit">
          <div className='icon'></div>
        </button>
      </form>
    </li>
  );
};

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
