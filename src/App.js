import React, { useContext } from 'react';

import { AppContext, DispatchContext } from './context'

import './App.css';

function App() {
	const users = useContext(AppContext)
	const dispatch = useContext(DispatchContext)

	return (
		<div className="App">
			<h1>Users:</h1>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<div style={{ display: "flex", flexDirection: "row" }}>
							<p style={{ marginRight: "1rem"}}>{`Name: ${user.name}`}</p>
							<button
								onClick={e => dispatch({ type: 'DELETE_USER', id: user.id })}
							>delete user</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
