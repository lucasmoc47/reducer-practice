const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USERS':
			return action.payload
		case 'DELETE_USER':
			return state.filter(user => user.id !== action.id)
		default:
			return state
	}
}

export default reducer