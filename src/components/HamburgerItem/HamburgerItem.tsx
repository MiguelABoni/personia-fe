import { SX_HOME } from '../../constants/sx/sxHome';
import { FC, MouseEventHandler } from 'react';
import { Button } from '@mui/material';

export const HamburgerItem: FC<{
  title: string;
  startIcon: JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement>;
}> = ({ title, startIcon, onClick }) => {
  return (
    <Button
      variant='contained'
      color='gray'
      startIcon={startIcon}
      onClick={onClick}
      sx={[{ width: '100%', borderRadius: '10px' }, SX_HOME.BUTTON_LARGE]}
    >
      {title}
    </Button>
  );
};
