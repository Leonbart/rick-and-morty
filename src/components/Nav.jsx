import SearchBar from './SearchBar.jsx';
import Button from './Button';
import styles from './Nav.module.css';
import logo from '../assets/rick_and_morty_logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Nav(props) {

    let location = useLocation();

    return (
        <div className={styles.divNav}>
            <div className={styles.divLeft}>
                <Link to='/home'>
                    <img className={styles.image} src={logo} alt='Rick and Morty' />
                </Link>
                <Link to='/about'>
                    <Button text='about' />
                </Link>
                <Button text='logout' onClick={props.logout} />
            </div>
            <div className={styles.divSearchBar}>
                {location.pathname === '/home' ? 
                <SearchBar
                    onSearch={props.onSearch}
                /> : null
                }
            </div>
        </div>
    );
}