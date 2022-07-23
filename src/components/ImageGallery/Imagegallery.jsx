import styles from './style.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

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

export default ImageGalley;
