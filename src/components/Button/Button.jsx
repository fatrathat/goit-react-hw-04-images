import styles from './style.module.css';

import PropTypes from 'prop-types';

const Button = props => {
  const clickHandler = () => {
    props.onClick();
  };

  return (
    <button onClick={clickHandler} className={styles.Button}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
