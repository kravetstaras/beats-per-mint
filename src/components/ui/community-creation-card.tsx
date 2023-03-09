import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import ButtonBPM from '@/components/ui/button-bpm';
import capitalizeFirstLetter from '@/utils/capitalize-first-letter';

import { communityCreationCard } from '@/styles/ui/community-creation-card';
import { inter } from '@/fonts';

type TCommunityCreationCard = {
	image: string;
	projectName: string;
	projectOwner: string;
	up: number;
	down: number;
};

export default function CommunityCreationCard({
	image,
	projectName,
	projectOwner,
	up,
	down,
}: TCommunityCreationCard) {
	return (
		<Box component='div' sx={communityCreationCard}>
			<div className='image'>
				<div className='mask' />
				<Image
					src={image}
					alt={projectName + 'icon'}
					width={307}
					height={307}
				/>
				<ButtonBPM
					click={() => console.log('View')}
					variantType='btnMortar'
					font={inter}
					label='View'
				/>
			</div>
			<div className='content'>
				<div>
					<h3>{capitalizeFirstLetter(projectName)}</h3>
					<h4>{projectOwner}</h4>
				</div>
				<div className='marks'>
					<span>
						<ArrowUpwardIcon />
						{up}
					</span>
					<span>
						<ArrowDownwardIcon />
						{down}
					</span>
				</div>
			</div>
		</Box>
	);
}
