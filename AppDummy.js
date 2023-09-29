/*

Old Version App.jsx
===================

import React, { useState } from "react";
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
	const [currentForm, setCurrentForm] = useState('signup');
	
	const toggleForm = () => {
		setCurrentForm(currentForm === 'signup' ? 'signin' : 'signup');
	};
	
	return (
		<div className="App">
		{currentForm === "signin" ? (
		<>
				<SignIn onFormSwitch={toggleForm} />
			</>
		) : (
			<>
			<SignUp onFormSwitch={toggleForm} />
			</>
			)}
			</div>
	);
}
		
export default App;
			
*/
