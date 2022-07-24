import styles from './style.module.css';
import Notiflix from 'notiflix';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGalley from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

import { axiosPhotos } from 'AxiosAPI';
import { useState, useEffect } from 'react';

export const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState([]);
  const [total, setTotal] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  const submitHandler = value => {
    setSearchInput(value);
    setData([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
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

  return (
    <div className={styles.App}>
      <Searchbar onSubmitHandler={submitHandler} />
      {status === 'idle' && (
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>
          Input search query
        </h2>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && Notiflix.Notify.failure('Nothing to watch!')}
      <ImageGalley data={data} />
      {status === 'resolved' && total !== data.length && (
        <Button onClick={loadMore} />
      )}
    </div>
  );
};
