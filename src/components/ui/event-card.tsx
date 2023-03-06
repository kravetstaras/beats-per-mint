import Box from '@mui/material/Box';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import ButtonBPM from '@/components/ui/button-bpm';

import { eventCard } from '@/styles/ui/event-card';

type TEventCard = {
  image?: string;
};

export default function EventCard({ image }: TEventCard) {
  return (
    <Box sx={eventCard}>
      <Box component='img' src={image} />
      <ButtonBPM
        icon={<PlayArrowIcon fontSize='large' />}
        click={() => console.log('Play')}
        //@ts-ignore
        //DOIT create ENUM for buttons type
        variantType='btnSulu'
      />
    </Box>
  );
}
