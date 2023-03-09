import React from 'react';
import Box from '@mui/material/Box';
import SubscriptionCard from '@/components/ui/subscription-card';

import { subscriptionsSection } from '@/styles/subscriptions-section';

const subscriptionsList = [
  {
    id: '1',
    name: 'Motorhead',
    image: '/assets/subscriptions-section/1.png',
  },
  {
    id: '2',
    name: 'Megadeth',
    image: '/assets/subscriptions-section/2.png',
  },
];

export default function SubscriptionsSection() {
  return (
    <Box component='section' sx={subscriptionsSection}>
      <h2>Subscriptions</h2>
      <div className='subscriptions'>
        {subscriptionsList.length > 0 &&
          subscriptionsList.map((subscription) => (
            <SubscriptionCard
              key={subscription.id}
              image={subscription.image}
              name={subscription.name}
            />
          ))}
      </div>
    </Box>
  );
}
