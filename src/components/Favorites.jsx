import './favorites.css';
import Card from './Card';
import { connect } from 'react-redux';

export function Favorites(props) {
    //    const { characters } = props;

    const handleOrderChange = (e) => {

    };

    const handleFilterChange = (e) => {

    };

    return (
        <>
            <div className='divOrderFiltering'>
                <label for='order'>Choose Ordering (asc/desc):</label>
                <select name='order' id="order" onChange={handleOrderChange}>
                    <option value='ASC'>Ascending</option>
                    <option value='DESC'>Descending</option>
                </select>

                <label for='filter'>Choose Filtering</label>
                <select name='filter' id='filter' onChange={handleFilterChange}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </select>
            </div>
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
        </>
    )
};

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites);