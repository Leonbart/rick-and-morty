import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import Detail from './components/Detail.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Form from './components/Form'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

function App() {

	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);

	let username = 'mymail@example.com';
	let password = '123';

	let location = useLocation();
	let navigate = useNavigate();

	const login = (userData) => {
		if (userData.user === username && userData.pass === password) {
			setAccess(true);
			navigate('/home');
		}
	};

	const logout = () => {
		setAccess(false);
	};

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

	useEffect(() => {
		!access && navigate('/');
	}, [access]);


	return (
		<div className='App' style={{ padding: '25px' }}>
			{location.pathname === '/' ? null :
				<Nav
					onSearch={onSearch}
					logout={logout}
				/>
			}
			<Routes>
				<Route path='/' element={<Form login={login} />} />;
				<Route path='/home' element={<Cards
					characters={characters}
					onClose={onClose}
				/>} />;
				<Route path='/about' element={<About />} />;
				<Route path='/detail/:detailId' element={<Detail />} />;
				<Route path='*' element={<Error />} />;
			</Routes>
		</div>
	)
}

export default App
