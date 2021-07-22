import { ContextProvider } from 'store'
export default function Application({ Component, pageProps }) {
	return <ContextProvider><Component {...pageProps} /></ContextProvider>
}
