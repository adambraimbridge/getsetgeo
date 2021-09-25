import Head from 'next/head'
import Link from 'next/link'
import Chat from '../../../components/chat'

const Adventure = () => {
	return (
		<>
			<Head>
				<title>Get Set Freo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div>
					<Link href="/">
						<a>Home</a>
					</Link>
				</div>
				<section>
					<Chat />
				</section>
			</main>
		</>
	)
}

export default Adventure
