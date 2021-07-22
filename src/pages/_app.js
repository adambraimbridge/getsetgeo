import { ContextProvider } from 'store/context'
export default function Application({ Component, pageProps }) {
	return <ContextProvider><Component {...pageProps} /></ContextProvider>
}
