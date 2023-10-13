// import { INITIAL_CHARACTERS } from '../../constants/initialCharacters';
// import { PATHS } from '../../constants/paths';
// import { getCharacters } from '../../services/characters/characters.services';
// import { useQuery } from '@tanstack/react-query';
// import { $Characters } from 'src/types/apiTypes';
// import { useState } from 'react';
// import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import { theme } from '../../theme/theme';
import { Helmet } from 'react-helmet';
import { Box, Button, Typography } from '@mui/material';

export const Home = () => {
  /** DELETE THIS */
  // const [counter, setCounter] = useState(0);

  // const { data, isFetching } = useQuery<$Characters, Error>({
  //   queryKey: ['characters'],
  //   queryFn: () => getCharacters(),
  //   initialData: INITIAL_CHARACTERS,
  // });

  return (
    <Box>
      <Helmet>
        <title>PersonIA - Home</title>
        <meta name='description' content='PersonIA - Home' />
      </Helmet>
      <Typography variant='h3' sx={{ color: theme.palette.gray.main }}>
        Home Page
      </Typography>
      <Button variant='contained' color='blueLight'>
        +
      </Button>
      {/* <Typography variant='h2' color='secondary'>
        {counter}
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={() => setCounter(counter + 1)}
      >
        +
      </Button>
      <Button
        variant='contained'
        color='success'
        href={PATHS.ABOUT}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </Button>
      <AddAlarmIcon />
      {isFetching ? (
        <Typography variant='h1' color='primary'>
          Cargando...
        </Typography>
      ) : (
        data?.results?.map((character) => (
          <Typography key={character.id} variant='h1' color='secondary'>
            {character.name}
          </Typography>
        ))
      )} */}
    </Box>
  );
};
