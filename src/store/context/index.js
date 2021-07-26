/**
 * Use React + Context, not React + Redux
 * https://youtu.be/eBYJ7O482Dc
 */
import React from 'react'

const reducer = (context = {}, payload) => {
	console.log('reducer!', { context, payload })
	return { ...context, ...payload }
}

export const Context = React.createContext()

export const ContextProvider = ({ children }) => {
	const [context, setContext] = React.useReducer(reducer)
	return <Context.Provider value={{ context, setContext }}>{children}</Context.Provider>
}
