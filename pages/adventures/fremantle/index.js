import Head from 'next/head'
import Chat from '../../../components/chat'

const Adventure = () => {
	return (
		<>
			<Head>
				<title>Get Set Geo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<section>
					<Chat />
				</section>
			</main>
		</>
	)
}

export default Adventure
