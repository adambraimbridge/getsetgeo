import Head from 'next/head'
import Chat from '../../../components/chat'

const Adventure = () => {
	return (
		<>
			<Head>
				<title>Get Set Geo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="px-4">
				<Chat />
			</main>
		</>
	)
}

export default Adventure
