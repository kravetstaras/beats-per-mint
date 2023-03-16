import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/client';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import capitalizeFirstLetter from '@/utils/capitalize-first-letter';
import { IconButton } from '@mui/material';

import { header, headerNavBar } from '@/styles/header';

const heaaderNavContent = [{ title: 'discover', id: 1, link: '/' }];

export default function Header() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [session, loading] = useSession();
	const router = useRouter();

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleCloseWithSleep = () => {
		setTimeout(() => {
			setAnchorEl(null);
		}, 200);
	};

	const handleClickProfile = (event: React.MouseEvent<HTMLElement>) => {
		handleClose();
		router.push('/profile');
	};

	const handleClickLogOut = (event: React.MouseEvent<HTMLElement>) => {
		handleClose();
		signOut();
	};

	return (
		<Box sx={header}>
			<Link href='/'>
				<Image
					src='/assets/icons/logo.png'
					alt='BPM logo'
					width={80}
					height={80}
				/>
			</Link>
			<Box component='nav' sx={headerNavBar}>
				{heaaderNavContent.map((link) => (
					<Link
						key={link.id}
						href={link.link}
						style={{
							fontWeight: router.pathname === link.link ? '700' : '400',
						}}
					>
						{capitalizeFirstLetter(link.title)}
					</Link>
				))}
				{!session && !loading && (
					<Link
						href='/auth'
						style={{
							fontWeight: router.pathname === '/auth' ? '700' : '400',
						}}
					>
						Log in
					</Link>
				)}
				{session && (
					<div>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleMenu}
							color='inherit'
						>
							<AccountCircle fontSize='inherit' />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={!!anchorEl}
							onClose={handleClose}
							MenuListProps={{
								'aria-labelledby': 'account-button',
								onMouseLeave: handleCloseWithSleep,
							}}
						>
							<MenuItem onClick={handleClickProfile}>Profile</MenuItem>
							<MenuItem onClick={handleClickLogOut}>Log out</MenuItem>
						</Menu>
					</div>
				)}
			</Box>
		</Box>
	);
}
