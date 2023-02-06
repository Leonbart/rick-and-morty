import styles from './Cards.module.css';
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.divCards}>
         {characters.map((elem, index) =>
            <Card
               key={index}
               id={elem.id}
               name={elem.name}
               species={elem.species}
               gender={elem.gender}
               image={elem.image}
               onClose={props.onClose}
            />)}
      </div>
   )
}
