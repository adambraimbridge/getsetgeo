import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import sunset from '../public/img/sunset.png'

const Index = () => {
	return (
		<>
			<Head>
				<title>Get Set Geo</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</Head>

			<div className="relative max-w-prose sm:py-3 sm:max-w-xl sm:mx-auto">
				<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-10 sm:skew-y-0 sm:-rotate-1 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
					<div className="mx-auto">
						<Image src={sunset} alt="Silhouettes of yachts at sunset" placeholder="blur" objectFit="contain" layout="responsive" className="rounded-lg" />

						<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
							<h1 className="text-yellow-400 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">Get Set Freo</h1>
							<h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">The Fremantle Adventure</h2>
							<p>Explore Fremantle in a fun-filled action-packed treasure hunt. You'll need your phone and about three hours to succeed.</p>
							<ul className="list-disc space-y-2">
								<li className="flex items-start">
									<span className="h-6 flex items-center sm:h-7">
										<svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
									</span>
									<p className="ml-2">Duration: 3 to 4 hours</p>
								</li>
								<li className="flex items-start">
									<span className="h-6 flex items-center sm:h-7">
										<svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
									</span>
									<p className="ml-2">Medium difficulty</p>
								</li>
								<li className="flex items-start">
									<span className="h-6 flex items-center sm:h-7">
										<svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
									</span>
									<p className="ml-2">Reward: 1500 Spudaroons</p>
								</li>
							</ul>
							<div className="pt-6 text-center leading-6 font-bold sm:text-lg sm:leading-7">
								<Link href="/adventures/fremantle">
									<button type="button" className="font-bold w-full sm:w-auto flex-none bg-gray-50 text-cyan-600 hover:text-cyan-700 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200">
										Ready? Get Set, Geo! &rarr;
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Index
