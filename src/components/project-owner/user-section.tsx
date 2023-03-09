import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { userSection } from '@/styles/user-section';

const userData = {
  name: 'Subscriber Name',
  bio: 'Short bio or description written by the subscriber.',
  subscriptions: 1,
  contentCreated: 'N/A',
  userBg: '/assets/user-section/1.jpg',
};

export default function UserSection() {
  return (
    <Box component='section' sx={userSection}>
      <div className='image'>
        <Image
          src={userData.userBg}
          alt={userData.name + 'bacground image'}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='content'>
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
      </div>
    </Box>
  );
}
