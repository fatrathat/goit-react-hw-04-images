import styles from './style.module.css';

import Searchbar from 'components/Searchbar/Searchbar';

import { axiosPhotos } from 'AxiosAPI';
import { useState } from 'react';

const INITIAL_STATE = {
  searchInput: '',
  data: [],
  page: 1,
  total: '',
  status: 'idle',
};
export const App = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const submitHandler = value => {
    // this.setState({
    //   searchInput: value,
    // });
    // this.setState({ data: [], page: 1 });
    console.log(value);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={submitHandler} />
    </div>
  );
};
