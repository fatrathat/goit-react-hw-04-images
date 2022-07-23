import styles from './style.module.css';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGalley from 'components/ImageGallery/Imagegallery';

import { axiosPhotos } from 'AxiosAPI';
import { useState, useEffect } from 'react';

export const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState([]);
  const [, setTotal] = useState('');
  const [page, setPage] = useState(1);
  const [, setStatus] = useState('idle');

  const submitHandler = value => {
    setSearchInput(value);
    setData([]);
    setPage(1);
  };

  useEffect(() => {
    if (searchInput) {
      setStatus('pending');

      axiosPhotos(searchInput, page).then(res => {
        if (res.hits.length === 0) {
          return setStatus('rejected');
        }

        const photos = res.hits.map(photo => {
          return {
            id: photo.id,
            webformatURL: photo.webformatURL,
            largeImageURL: photo.largeImageURL,
            tags: photo.tags,
          };
        });

        setData(prev => [...prev, ...photos]);
        setTotal(res.total);
        setStatus('resolved');
      });
    }
  }, [searchInput, page]);

  // const loadMore = () => {
  //   setPage(prev => prev + 1);
  // };

  return (
    <div className={styles.App}>
      <Searchbar onSubmitHandler={submitHandler} />
      <ImageGalley data={data} />
    </div>
  );
};
