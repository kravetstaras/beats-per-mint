import ProfileForm from '@/Components/Profile/ProfileForm';

function UserProfile() {
	async function changePasswordHandler(passwordData) {
		const response = await fetch('/api/user/change-password', {
			method: 'PATCH',
			body: JSON.stringify(passwordData),
			headers: {
				'content-type': 'application/json',
			},
		});

		const data = await response.json();
		console.log(data);
	}

	return (
		<section>
			<h1>Your User Profile</h1>
			<ProfileForm onChangePassword={changePasswordHandler} />
		</section>
	);
}

export default UserProfile;
