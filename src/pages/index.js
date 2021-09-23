import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
	return (
		<>
			<Head>
				<title>Get Set Geo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<p>Ready? Get Set, Geo!</p>
				<h1>The Fremantle Adventure</h1>
				<p>Explore Fremantle in a fun filled action packed treasure hunt.</p>
				<p>You'll need your phone and about three hours to be successful.</p>
				<Link href="/adventures/fremantle">
					<a>Go</a>
				</Link>
			</main>
		</>
	)
}

export default Index
