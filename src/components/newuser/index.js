import React from 'react'
import PouchDB from 'pouchdb'
import { Context } from 'store/context'

/**
 * New user UI
 */

export const NewUser = () => {
	const userDatabase = new PouchDB('userDatabase')
	const [username, setUsername] = React.useState()
	const { setState } = React.useContext(Context)
 
	const handleSubmit = async (event) => {
		event.stopPropagation()
		event.preventDefault()

		console.log({ username })
		// const user = await userDatabase.set('user').catch(() => null)
		
		setState({
			user: { name: username }
		})
		return false // Important: Don't actually submit the form
	}

	return (
		<>
			<p>What's your name?</p>
			<form onSubmit={handleSubmit}>
				<input type="text" onKeyUp={(event) => event.stopPropagation()} onChange={(event) => setUsername(event.target.value)} placeholder="Enter name" />
				<button type="submit">it me</button>
			</form>
		</>
	)
}
