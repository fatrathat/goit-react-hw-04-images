import { useState } from 'react';
import styles from './style.module.css';

import Modal from 'components/Modal/Modal';

const ImageGalleryItem = props => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <li className={styles.ImageGalleryItem} onClick={showModal}>
      <img
        src={props.webformatURL}
        alt={props.tags}
        className={styles.ImageGalleryItemImage}
      />
      {show && (
        <Modal
          img={props.largeImageURL}
          tags={props.tags}
          onClick={showModal}
        />
      )}
    </li>
  );
};

export default ImageGalleryItem;
