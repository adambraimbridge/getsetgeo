import React from 'react'
import PouchDB from 'pouchdb'
import Head from 'next/head'
import Link from 'next/link'

import { Context } from 'store/context'
import { NewUser } from 'components/newuser'
// import { Creator } from 'components/creator'

const Menu = () => (
	<>
		<p>This is the menu</p>
		<ul>
			<li>
				<Link href="/">Do a Treasure Hunt</Link>
			</li>
			<li>
				<Link href="/creator">Create a new Treasure Hunt</Link>
			</li>
		</ul>
	</>
)

export default function Index() {
	const { state, setState } = React.useContext(Context)
	const user = state?.user || false

	const [loading, setLoading] = React.useState(true)

	// Load user database then update state.
	// Use an iife so we can use async/await style code.
	;(async () => {
		const userDatabase = new PouchDB('userDatabase')
		const user = await userDatabase.get('user').catch(() => null)
		if (user) setState({ user })
		setLoading(false)
	})()

	return (
		<>
			<Head>
				<title>Get Set Geo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{loading && <>loading ...</>}
				{!loading && !user && <NewUser />}
				{user && (
					<>
						Hello {user.name}
						<Menu />
					</>
				)}
			</main>
		</>
	)
}
