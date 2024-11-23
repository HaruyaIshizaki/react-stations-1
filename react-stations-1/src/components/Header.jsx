import styles from './css/Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <header className={styles.header}>
            <h2 className={styles.title}>掲示板</h2>
            <Link className={styles.a} to='/threads/new'>スレッドを立てる</Link>
        </header>
    )
}