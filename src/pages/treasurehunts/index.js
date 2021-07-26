import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Data from 'library/riddles'

export default function Index() {
	const { title, description } = Data
	return (
		<>
			<Head>
				<title>Get Set Geo | Treasure Hunt</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Link href="/">Home</Link>
				<div style={{border:"1px solid grey", padding: "0em 1em 1em", marginBottom: "1em"}}>
					<p>
						<strong>{title}</strong>
					</p>
					<p>{description}</p>
					<Link href={`/treasurehunt/?title=${title}`}>
						<button>Start</button>
					</Link>
				</div>
				<div style={{border:"1px solid grey", padding: "0em 1em 1em", marginBottom: "1em"}}>
					<p>
						<strong>{title} 02</strong>
					</p>
					<p>{description} 02</p>
					<Link href={`/treasurehunt/?title=${title}`}>
						<button>Start</button>
					</Link>
				</div>
				<div style={{border:"1px solid grey", padding: "0em 1em 1em", marginBottom: "1em"}}>
					<p>
						<strong>{title} 03</strong>
					</p>
					<p>{description} 03</p>
					<Link href={`/treasurehunt/?title=${title}`}>
						<button>Start</button>
					</Link>
				</div>
			</main>
		</>
	)
}
