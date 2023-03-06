import React from 'react';
import EventCard from '@/components/ui/event-card';

const projects = [
  {
    id: '1',
    image: '/assets/piano-photo.jpg',
    projectName: 'Project Name',
    projectOwner: 'Project Owner',
    details: [
      'Subscription detail',
      'More of what’s included',
      'Another subscription detail',
      'More details here',
    ],
    price: '$XX.XX or $X/month',
  },
  {
    id: '2',
    image: '/assets/drums-photo.jpg',
    projectName: 'Project Name',
    projectOwner: 'Project Owner',
    details: [
      'Subscription detail',
      'More of what’s included',
      'Another subscription detail',
      'More details here',
    ],
    price: '$XX.XX or $X/month',
  },
];

export default function DiscoverSection() {
  return (
    <section>
      <h2>Discover BPMs</h2>
      {projects?.length > 0 &&
        projects.map((project) => (
          <EventCard key={project.id} image={project.image} />
        ))}
    </section>
  );
}
