import * as React from 'react';
import PropTypes from 'prop-types';
import MagnifierIcon from '../../../assets/icons/icon-magnifier-grey.svg';
import styles from './SearchBar.css';

const SearchBar = props => {
  const { onChange, searchTitle } = props;
  return (
    <div className={styles.Wrapper}>
      <div className={styles.InputWrapper}>
        <MagnifierIcon />
        <input
          className={styles.SearchInput}
          type="text"
          placeholder="Search movies..."
          onChange={onChange}
          value={searchTitle}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchTitle: PropTypes.string
};

export default SearchBar;
