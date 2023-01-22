import SearchBar from './SearchBar.jsx';
import About from './About.jsx';
import styles from './Nav.module.css';

export default function Nav(props) {
    return (
        <div className={styles.divNav}>
            <div className={styles.divSearchBar}>
                <SearchBar
                    onSearch={props.onSearch}
                />
            </div>
        </div>
    );
}