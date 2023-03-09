import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import ButtonBPM from '@/components/ui/button-bpm';

import { helvetica } from '@/fonts';
import { showMoreWrapper } from '@/styles/ui/show-more-wrapper';

type TShowMoreWrapper = {
  children: React.ReactNode;
  maxHeight?: number;
};

export default function ShowMoreWrapper({
  children,
  maxHeight = 400,
}: TShowMoreWrapper) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box sx={showMoreWrapper} className='wrapper'>
      <Box
        sx={{
          maxHeight: showMore ? `${maxHeight}px` : '100%',
        }}
        className='childrenWrapper'>
        {children}
      </Box>
      {showMore && <div className='shadow' />}
      <ButtonBPM
        label={showMore ? 'show more' : 'show less'}
        icon={
          showMore ? (
            <ExpandMoreIcon fontSize='small' />
          ) : (
            <ExpandLessIcon fontSize='small' />
          )
        }
        variantType='btnAlto'
        font={helvetica}
        click={toggleShowMore}
      />
    </Box>
  );
}
