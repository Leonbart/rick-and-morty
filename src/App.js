import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import Detail from './components/Detail.jsx'
import About from './components/About.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {

	const [characters, setCharacters] = useState([]);

	const onSearch = (characterID) => {
		// Check if character is already in characters to avoid duplicates
		if (characters.find(elem => elem.id === parseInt(characterID))) window.alert('Selected character is already shown')
		else {
			// If character is not in characters, fetch from API
			fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
				.then((response) => response.json())
				.then((data) => {
					if (data.name) {
						setCharacters((oldChars) => [...oldChars, data]);
					} else {
						window.alert('No character found with this ID');
					}
				});
		}
	};

	const onClose = (characterID) => {
		setCharacters((oldChars) => oldChars.filter(c => c.id !== characterID));
	};

	return (
		<div className='App' style={{ padding: '25px' }}>
			<Nav
				onSearch={onSearch}
			/>
			<Routes>
				<Route path='/' element={<Cards
					characters={characters}
					onClose={onClose}
				/>}/>;
				<Route path='/about' element={<About />} />;
				<Route path='/detail/:detailId' element={<Detail />} />;
			</Routes>
		</div>
	)
	// return (
	//   <div className='App' style={{ padding: '25px' }}>
	//     <div>
	//       <Nav
	//         onSearch={onSearch}
	//       />
	//     </div>
	//     <div>

	//       <Cards
	//         characters={characters}
	//         onClose={onClose}
	//       />

	//     </div>
	//   </div>
	// )
}

export default App
