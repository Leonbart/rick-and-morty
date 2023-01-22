import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {

   return (
      <div className={styles.divCard}>

         <div className={styles.divButton}>
            <button
               className={styles.buttonCard}
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