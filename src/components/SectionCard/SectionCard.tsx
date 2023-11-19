import { SX_GLOBAL } from '../../constants/sx/sxGlobal';
import { SX_SECTION_CARD } from '../../constants/sx/sxSectionCard';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

export const SectionCard: FC<{
  title: string;
  description: string;
  path: string;
  imageUrl: string;
}> = ({ title, description, path, imageUrl }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Stack
        data-testid={`card-${title}`}
        sx={SX_SECTION_CARD.FIRST_CONTAINER(imageUrl)}
      >
        <Stack sx={SX_SECTION_CARD.SECOND_CONTAINER}>
          <Typography
            variant='h3'
            data-testid={`card-${title}-title`}
            sx={SX_GLOBAL.CENTER_TEXT}
          >
            {title}
          </Typography>
          <Typography variant='h4' sx={SX_GLOBAL.CENTER_TEXT}>
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
};
