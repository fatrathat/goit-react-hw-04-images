import { useEffect } from 'react';
import styles from './style.module.css';

import PropTypes from 'prop-types';

const Modal = props => {
  const onOverlayClick = e => {
    if (e.currentTarget !== e.target) {
      props.onClick();
    }
  };

  const onEscapeDown = e => {
    if (e.code === 'Escape') {
      props.onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscapeDown);
    return () => {
      window.removeEventListener('keydown', onEscapeDown);
    };
  });

  return (
    <div className={styles.Overlay} onClick={onOverlayClick}>
      <div className={styles.Modal}>
        <img src={props.img} alt={props.tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
