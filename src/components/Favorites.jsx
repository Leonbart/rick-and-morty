import './favorites.css';
import Card from './Card';
import { connect } from 'react-redux';

export function Favorites(props) {
    //    const { characters } = props;
    return (
        <div className='divFavCards'>
            {/* Only sending some of the data to the Card component to differentiate from the home cards page */}
            {props.myFavorites.map((elem, index) =>
                <Card
                    key={index}
                    id={elem.id}
                    name={elem.name}
                    // species={elem.species}
                    // gender={elem.gender}
                    image={elem.image}
                />)}
        </div>
    )
};

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null) (Favorites);