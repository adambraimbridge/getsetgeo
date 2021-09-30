import Link from 'next/link'

export default function Layout({ children }) {
	return (
		<div className="min-h-screen bg-gray-100 py-1 flex flex-col sm:py-2">
			<nav className="py-1 flex justify-between border-b border-opacity-20 px-4">
				<div className="flex items-center space-x-12">
					<div className="flex space-x-2 text-2xl items-center">
						<Link href="/">
							<img className="w-8" src="/img/skull-and-crossbones.svg" />
						</Link>
					</div>
				</div>
			</nav>

			<div className="relative max-w-prose sm:py-3 sm:max-w-xl sm:mx-auto">
				<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-10 sm:skew-y-0 sm:-rotate-1 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">{children}</div>
			</div>
		</div>
	)
}
