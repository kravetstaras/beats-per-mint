import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { subscriptionCard } from '@/styles/ui/subscription-card';

type TSubscriptionCard = {
  image: string;
  name: string;
};

export default function SubscriptionCard({ image, name }: TSubscriptionCard) {
  return (
    <Box sx={subscriptionCard} component='div'>
      <div className='image'>
        <Image src={image} alt={name + 'logo'} width={100} height={100} />
      </div>
      <p>{name}</p>
    </Box>
  );
}
