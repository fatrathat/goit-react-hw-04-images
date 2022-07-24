import styles from './style.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';

const ImageGalley = props => (
  <div>
    <ul className={styles.ImageGallery}>
      {props.data.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          tags={item.tags}
        />
      ))}
    </ul>
  </div>
);

ImageGalley.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGalley;
