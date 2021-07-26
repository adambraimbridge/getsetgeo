import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Data from 'library/riddles'


const Question = () => (
	<p>hello</p>
	)
	
	export default function Index() {
		
		const { title, questions } = Data
		console.log({ questions })
	return (
		<>
			<Head>
				<title>Get Set Geo | {title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Link href="/">Home</Link>
				<p>
					<strong>{title}</strong>
				</p>
				{questions.map((question) => (
					<Question  />
				))}
			</main>
		</>
	)
}
