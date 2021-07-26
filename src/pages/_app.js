import Layout from 'components/Layout'

const Application = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
export default Application
