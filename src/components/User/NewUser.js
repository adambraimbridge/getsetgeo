import { useState } from 'react'

const NewUser = ({ setUser }) => {
	const [name, setName] = useState('')
	const handleSubmit = async (event) => {
		event.stopPropagation()
		event.preventDefault()

		setUser({
			name,
		})

		return false // Important: Don't actually submit the form
	}

	return (
		<>
			<p>What's your name?</p>
			<form onSubmit={handleSubmit}>
				<input type="text" onKeyUp={(event) => event.stopPropagation()} onChange={({ target }) => setName(target.value)} placeholder="Enter name" />
				<button type="submit">it me</button>
			</form>
		</>
	)
}

export default NewUser
