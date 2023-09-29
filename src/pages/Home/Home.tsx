import { INITIAL_CHARACTERS } from '../../data/initialCharacters';
import { getCharacters } from '../../services/characters/characters.services';
import { useQuery } from '@tanstack/react-query';
import { $Characters } from 'src/types/apiTypes';
import { useState } from 'react';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import { Box, Button, Typography } from '@mui/material';

export const Home = () => {
  const [counter, setCounter] = useState(0);

  const { data, isFetching } = useQuery<$Characters, Error>({
    queryKey: ['characters'],
    queryFn: () => getCharacters(),
    initialData: INITIAL_CHARACTERS,
  });

  return (
    <Box>
      <Typography variant='h1' color='error'>
        Home Page
      </Typography>
      <Typography variant='h2' color='secondary'>
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
      )}
    </Box>
  );
};
