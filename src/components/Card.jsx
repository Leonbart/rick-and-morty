import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../redux/actions';
import { useState } from 'react';
import { connect } from 'react-redux';

export function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = (e) => {
      // Switches the isFav state. If it's true makes it false (and deletes the character from favorites), and the other way around (adding the character to favorites)
      if (isFav) {
         props.deleteFavorite(props.id);
      }
      else {
         setIsFav(true);
         props.addFavorite(props);
      }
   };


   return (
      <div className={styles.divCard}>

         <div className={styles.divButton}>
            <button
               className={styles.buttonCloseCard}
               onClick={() => { props.onClose(props.id) }}
            // onClick={props.onClose(props.id)}
            >
               X
            </button>
         </div>

         <div className={styles.divImgContainer}>
            <img className={styles.imgCard} src={props.image} alt="img not found" />
            <div className={styles.nameContainer}>
               {/* <span id='name'>{props.name}</span> */}
               <Link to={`/detail/${props.id}`} style={{textDecoration: 'none'}}>
                  <div className={styles.name}> {props.name}</div>
               </Link>
            </div>
         </div>

         <div className={styles.divSpecs}>
            <span className={styles.specs}>{props.id}</span>
            <span className={styles.specs}>{props.species}</span>
            <span className={styles.specs}>{props.gender}</span>
         </div>
      </div>
   );
}


function mapDispatchToProps(dispatch) {
   return {
   addFavorite: function() {
     dispatch(addFavorite());
   },
   deleteFavorite: function() {
     dispatch(deleteFavorite())
   },
 }
};



export default connect(null, mapDispatchToProps) (Card);
