import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {

   const [characterID, setCharacterID] = useState();

   const handleChange = (e) => {
      setCharacterID(e.target.value);
   };


   return (
      <div className={styles.divSearch}>
         <input
            className={styles.input}
            type='search'
            placeholder='Character ID...'
            // value={characterID}
            onChange={handleChange}
         />
         <button
            onClick={() => props.onSearch(characterID)}
            className={styles.button}
         >Add</button>
         <button
            onClick={() => props.onSearch(Math.floor(Math.random()*826 + 1))}
            className={`${styles.button} ${styles.buttonRandom}`}
         >Add Random</button>
      </div>
   );
}
