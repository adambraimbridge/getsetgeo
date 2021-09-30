export default function Layout({ children }) {
	return (
		<div className="min-h-screen bg-gray-100 py-1 flex flex-col sm:py-2">
			<div className="relative sm:py-3 sm:max-w-xl sm:mx-auto">
				<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-10 sm:skew-y-0 sm:-rotate-1 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">{children}</div>
			</div>
		</div>
	)
}
