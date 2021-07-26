const UserNav = ({ user, setUser }) => {
	const logout = () => setUser(false)
	return (
		<section>
			Hello, {user.name}
			<button style={{ float: 'right' }} onClick={logout}>
				Log out
			</button>
		</section>
	)
}
export default UserNav
