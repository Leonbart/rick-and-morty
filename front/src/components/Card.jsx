import styles from './Card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../redux/actions';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

export function Card(props) {
   const [isFav, setIsFav] = useState(false);

   let location = useLocation();

   const character = {
      name: props.name,
      id: props.id,
      image: props.image,
      gender: props.gender,
      species: props.species,
   };

   const handleFavorite = (e) => {
      // Switches the isFav state. If it's true makes it false (and deletes the character from favorites), and the other way around (adding the character to favorites)
      if (isFav) {
         setIsFav(false);
         props.deleteFavorite(props.id);
      }
      else {
         setIsFav(true);
         props.addFavorite(character);
         // props.addFavorite(props);
      }
   };

   useEffect(() => {
      props.allFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.allFavorites]);


   return (
      <div className={styles.divCard}>
         {/* div for holding buttons (favorite and close) */}
         <div className={styles.divButton}>

            {/* Favorite button */}
            {location.pathname !== '/favorites' ?
               isFav ? (
                  <button
                     className={styles.buttonFavorite}
                     onClick={handleFavorite}>
                     ❤️
                  </button>
               )
                  : (
                     <button
                        className={styles.buttonFavorite}
                        onClick={handleFavorite}>
                        🤍
                     </button>
                  )
               : null
            }

            {/* Close button */}
            {location.pathname !== '/favorites' ?
               <button
                  className={styles.buttonCloseCard}
                  onClick={() => { props.onClose(props.id) }}
               >
                  X
               </button>
               : null
            }

         </div>

         <div className={styles.divImgContainer}>
            <img className={styles.imgCard} src={props.image} alt="img not found" />
            <div className={styles.nameContainer}>
               <Link to={`/detail/${props.id}`} style={{ textDecoration: 'none' }}>
                  <div className={styles.name}> {props.name}</div>
               </Link>
            </div>
         </div>

         {/* Specs */}
         <div className={styles.divSpecs}>
            {/* {console.log(props)} */}
            <span className={styles.specs}>{props.id}</span>

            <span className={styles.specs}>{props.gender}</span>
            <span className={styles.specs}>{props.species}</span>
         </div>
      </div>
   );
}


export function mapStateToProps(state) {
   return {
      allFavorites: state.allFavorites,
   };
};


export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: function (favChar) {
         dispatch(addFavorite(favChar));
      },
      deleteFavorite: function (id) {
         dispatch(deleteFavorite(id))
      },
   }
};



export default connect(mapStateToProps, mapDispatchToProps)(Card);
