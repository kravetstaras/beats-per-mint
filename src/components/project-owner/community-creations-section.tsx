import React from 'react';
import Box from '@mui/material/Box';

import CommunityCreationCard from '../ui/community-creation-card';

const communityCreations = [
  {
    id: '1',
    image: '/assets/community-creations/1.jpg',
    projectName: '8th of march',
    projectOwner: 'Edward Sanchez',
    up: 12,
    down: 3,
  },
  {
    id: '2',
    image: '/assets/community-creations/2.jpg',
    projectName: '9th of march',
    projectOwner: 'Tonya Webster',
    up: 3,
    down: 199,
  },
  {
    id: '3',
    image: '/assets/community-creations/3.jpg',
    projectName: 'evening with pianoboy',
    projectOwner: 'Mike Patton',
    up: 35,
    down: 1,
  },
  {
    id: '4',
    image: '/assets/community-creations/4.jpg',
    projectName: 'drum show',
    projectOwner: 'Todd Clark',
    up: 54,
    down: 3,
  },

  {
    id: '5',
    image: '/assets/community-creations/5.jpg',
    projectName: 'daddy at home',
    projectOwner: 'Richard Jimenez',
    up: 12,
    down: 999,
  },
  {
    id: '6',
    image: '/assets/community-creations/6.jpg',
    projectName: 'neighbor at home',
    projectOwner: 'Wendell Tucker',
    up: 19,
    down: 998,
  },
  {
    id: '7',
    image: '/assets/community-creations/7.jpg',
    projectName: 'eclectic sonic',
    projectOwner: 'Scott Bradley',
    up: 103,
    down: 34,
  },
];

export default function CommunityCreationsSection() {
  return (
    <Box component='section'>
      {communityCreations.length > 0 &&
        communityCreations.map((el) => (
          <CommunityCreationCard
            key={el.id}
            image={el.image}
            projectName={el.projectName}
            projectOwner={el.projectOwner}
            up={el.up}
            down={el.down}
          />
        ))}
    </Box>
  );
}
