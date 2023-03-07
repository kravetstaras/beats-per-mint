import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EastIcon from '@mui/icons-material/East';

import ButtonBPM from '@/components/ui/button-bpm';

import { eventCard } from '@/styles/ui/event-card';
import { inter } from '@/fonts';

type TEventCard = {
  image: string;
  projectName: string;
  projectOwner: string;
  details: string[];
  price: string;
  link: string;
};

export default function EventCard({
  image,
  projectName,
  projectOwner,
  details,
  price,
  link,
}: TEventCard) {
  return (
    <Box sx={eventCard} component='div'>
      <div className='image'>
        <Image
          src={image}
          alt={projectName + 'photo'}
          width={456}
          height={339}
        />
        <ButtonBPM
          icon={<PlayArrowIcon fontSize='large' />}
          click={() => console.log('Play')}
          //@ts-ignore
          //DOIT create ENUM for buttons type
          variantType='btnSulu'
        />
      </div>
      <div className='content'>
        <h4>{projectName}</h4>
        <h5>{projectOwner}</h5>
        {details.length > 0 && (
          <ul>
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
        <p>{price}</p>
        <div className='controls-block'>
          <ButtonBPM label='Subscribe' variantType='btnMortar' font={inter} />
          <Link href={link}>
            Go to project page <EastIcon />
          </Link>
        </div>
      </div>
    </Box>
  );
}
