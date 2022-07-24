import { useState } from 'react';
import styles from './style.module.css';

import PropTypes from 'prop-types';

const Searchbar = props => {
  const [inputValue, setInputSearch] = useState('');

  const changeHandler = e => {
    const { value } = e.currentTarget;
    setInputSearch(value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('Please input search query!');
      return;
    }
    props.onSubmitHandler(inputValue);
    setInputSearch('');
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={submitHandler}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={changeHandler}
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

export default Searchbar;
