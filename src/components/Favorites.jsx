import './favorites.css';
import Card from './Card';
import { connect, useDispatch } from 'react-redux';
import * as actions from '../redux/actions/index.js';
import { useEffect } from 'react';

export function Favorites(props) {
    //    const { characters } = props;
    const dispatch = useDispatch();

    const handleOrderChange = (e) => {
        dispatch(actions.orderCards(e.target.value));
    };

    const handleFilterChange = (e) => {
        dispatch(actions.filterCards(e.target.value));
    };

    useEffect(() => {
        dispatch(actions.resetFavFilters());
    }, []);

    return (
        <>
            <div className='divOrderFiltering'>
                {/* <label htmlFor='order'>Choose Ordering (asc/desc):</label> */}
                <select name='order' id="order" onChange={handleOrderChange}>
                    <option value="" disabled selected>Select Order</option>
                    <option value='ASC'>Ascending</option>
                    <option value='DESC'>Descending</option>
                </select>

                {/* <label htmlFor='filter'>Choose Filtering</label> */}
                <select name='filter' id='filter' onChange={handleFilterChange}>
                    <option value="" disabled selected>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </select>
            </div>
            <div className='divFavCards'>
                {props.myFavorites.map((elem, index) =>
                    <Card
                        key={index}
                        id={elem.id}
                        name={elem.name}
                        species={elem.species}
                        gender={elem.gender}
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