import { useState } from 'react'
import { UserNav, NewUser } from 'components/User'

const Layout = ({ children }) => {
	const [user, setUser] = useState(false)

	return (
		<main>
			{user ? (
				<>
					<UserNav user={user} setUser={setUser} />
					{children}
				</>
			) : (
				<NewUser setUser={setUser} />
			)}
		</main>
	)
}
export default Layout
