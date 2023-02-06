import './favorites.css';
import Card from './Card';
import { connect, useDispatch } from 'react-redux';
import * as actions from '../redux/actions/index.js';
import { useEffect, useState } from 'react';

export function Favorites(props) {
    const [selectedOrdering, setSelectedOrdering] = useState("");
    const [selectedFiltering, setSelectedFiltering] = useState("");

    const dispatch = useDispatch();

    const handleOrderChange = (e) => {
        dispatch(actions.orderCards(e.target.value));
        setSelectedOrdering(e.target.value);
        setSelectedFiltering("");
    };

    const handleFilterChange = (e) => {
        dispatch(actions.filterCards(e.target.value));
        setSelectedFiltering(e.target.value);
        setSelectedOrdering("");
    };

    useEffect(() => {
        dispatch(actions.resetFavFilters());
    }, []);

    return (
        <>
            {/* Ordering and Filtering buttons */}
            <div
                className='divOrderFiltering'>
                <select className='selectOrderFilter'
                    name='order'
                    value={selectedOrdering}
                    onChange={handleOrderChange}
                // defaultValue=""
                >
                    <option value="" disabled>Select Order</option>
                    <option value='ASC'>Ascending</option>
                    <option value='DESC'>Descending</option>
                </select>

                <select
                    className='selectOrderFilter'
                    name='filter'
                    value={selectedFiltering}
                    onChange={handleFilterChange}
                // defaultValue=""
                >
                    <option value="" disabled>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </select>
            </div>

            {/* Favorite Cards */}
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