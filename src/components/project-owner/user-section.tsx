import React from 'react';
import Box from '@mui/material/Box';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { userSection } from '@/styles/user-section';

const userData = {
	name: 'Subscriber Name',
	bio: 'Short bio or description written by the subscriber.',
	subscriptions: 1,
	contentCreated: 'N/A',
};

export default function UserSection() {
	return (
		<Box component='section' sx={userSection}>
			<AccountCircleIcon />
			<span>
				<h3>{userData.name}</h3>
				<ShareIcon />
			</span>
			<p>{userData.bio}</p>
			<div className='statistic'>
				<div className='subscriptions'>
					<span>{userData.subscriptions}</span>
					<span>Subscriptions</span>
				</div>
				<div className='content-created'>
					<span>{userData.contentCreated}</span>
					<span>Content Created</span>
				</div>
			</div>
		</Box>
	);
}
