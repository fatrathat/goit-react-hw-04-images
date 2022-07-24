import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './style.module.css';

const Loader = () => (
  <div className={styles.Loader}>
    <TailSpin />
  </div>
);

export default Loader;
