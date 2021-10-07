import Link from 'next/link'

export default function Layout({ children }) {
	return (
		<div className="min-h-screen bg-gray-100 py-1 flex flex-col sm:py-2">
			<nav className="py-1 flex justify-between border-b border-opacity-20 px-4">
				<div className="md:items-center md:w-auto flex">
					<Link href="/">
						<img className="w-8" src="/img/skull-and-crossbones.svg" />
					</Link>
				</div>
			</nav>
			{children}
		</div>
	)
}
