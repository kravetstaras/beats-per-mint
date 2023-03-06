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
    link: '/',
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
    link: '/',
  },
];

export default function DiscoverSection() {
  return (
    <section>
      <h2>Discover BPMs</h2>
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
    </section>
  );
}
