import { useRef } from 'react';

function ProfileForm(props) {
	const inputOldPassword = useRef();
	const inputNewPassword = useRef();

	async function submitHandler(event) {
		event.preventDefault();

		const oldPassword = inputOldPassword?.current.value;
		const newPassword = inputNewPassword?.current.value;

		props.onChangePassword({
			oldPassword,
			newPassword,
		});
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label htmlFor='new-password'>New Password</label>
				<input type='password' id='new-password' ref={inputNewPassword} />
			</div>
			<div>
				<label htmlFor='old-password'>Old Password</label>
				<input type='password' id='old-password' ref={inputOldPassword} />
			</div>
			<div>
				<button>Change Password</button>
			</div>
		</form>
	);
}

export default ProfileForm;
