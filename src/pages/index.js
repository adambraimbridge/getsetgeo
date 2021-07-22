import React from 'react';
import PouchDB from 'pouchdb';
import Head from 'next/head'
import { Context } from 'store'

const setUser = (foo) => {
	console.log({ foo })
	return false
}

/**
 * New user UI
 */
const NewUser = () => {
	return (
		<>
			<p>New phone. Who dis?</p>
			<form onSubmit={ setUser }>
				<input />
				<button type="submit">it me</button>
			</form>
		</>
	)
}

/**
 * Main content
 */
const Loaded = () => {
	const { state } = React.useContext(Context)
	const user = state?.user 
	return (
		user
			? <p>Main</p>
			: <NewUser />
	)
}

/**
 * Display a loading animation until the local PouchDB database loads.
 */
const Loading = () => {
	const { setState } = React.useContext(Context)
	const [loaded, setLoaded] = React.useState(false)
	
	// Load user database then update state
	;(async () => {
		const userDatabase = new PouchDB('userDatabase')
		const user = await userDatabase.get('user').catch(() => null)
		if (user) setState({ user })
		setLoaded(true)
	})()

	return (loaded
		? <Loaded />
		: null
	)
}

export default function Index() {
	return (
		<>
			<Head>
				<title>Get Set Geo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Loading />
			</main>
		</>
	)
}
