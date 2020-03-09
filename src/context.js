import React, { createContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import reducer from './reducer'

const initialUsers = []

export const AppContext = createContext();
export const DispatchContext = createContext();

export function AppContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialUsers)

	useEffect(() => {
		getUsers()
	}, [])

	async function getUsers() {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				dispatch({ type: 'SET_USERS', payload: response.data })
			})
			.catch(e => console.log(e))
	}

	return (
		<AppContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</AppContext.Provider>
	)
}