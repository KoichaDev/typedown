// React dependency
import { Routes, Route } from 'react-router-dom';

// UI Components
import Dashboard from './views/dashboard/Dashboard';
import Login from './views/auth/Login';
import Register from './views/auth/Register';

import './App.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />}></Route>
			<Route path='/login' element={<Login />}></Route>
			<Route path='/register' element={<Register />}></Route>
		</Routes>
	);
}

export default App;
