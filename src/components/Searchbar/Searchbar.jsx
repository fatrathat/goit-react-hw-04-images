import { useState } from 'react';
import styles from './style.module.css';

const searchState = {
  searchValue: '',
};

const Searchbar = props => {
  const [state, setState] = useState('');

  const changeHandler = e => {
    const { value } = e.currentTarget;
    setState({ searchInput: value });
  };

  const submitHandler = e => {
    e.preventDefault();

    console.log(searchState);
    props.onSubmit(searchState);

    // setState({ searchValue: '' });
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
          value={state.searchValue}
        />
      </form>
    </header>
  );
};

export default Searchbar;
