import React from 'react';
import EventCard from '@/components/ui/event-card';
import Box from '@mui/material/Box';
import { discoverSection } from '@/styles/discover-section';

const projects = [
  {
    id: '1',
    image: '/assets/piano-photo.jpg',
    projectName: 'Piano Lessons',
    projectOwner: 'Tina Williams',
    details: [
      'Subscription detail',
      'More of what’s included',
      'Another subscription detail',
      'More details here',
    ],
    price: '$15.50/lesson or 140/month',
    link: '/',
  },
  {
    id: '2',
    image: '/assets/drums-photo.jpg',
    projectName: 'Drum Lesson',
    projectOwner: 'James Murphy',
    details: [
      'Subscription detail',
      'More of what’s included',
      'Another subscription detail',
      'More details here',
    ],
    price: '$12/lesson or $110/month',
    link: '/',
  },
];

export default function DiscoverSection() {
  return (
    <Box component='section' sx={discoverSection}>
      <h2>Discover BPMs</h2>
      <div className='grid'>
        {projects?.length > 0 &&
          projects.map((project) => (
            <EventCard
              key={project.id}
              image={project.image}
              projectName={project.projectName}
              projectOwner={project.projectOwner}
              details={project.details}
              price={project.price}
              link={project.link}
            />
          ))}
      </div>
    </Box>
  );
}
