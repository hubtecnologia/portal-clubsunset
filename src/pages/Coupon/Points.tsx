import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';

interface TitleProps {
  children?: React.ReactNode;
}

function Title(props: TitleProps) {
  return (
    <Typography component='h2' variant='h6' color='primary' gutterBottom>
      {props.children}
    </Typography>
  );
}

export default function Points(points: number) {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 150,
      }}
    >
      <Title>Meus Pontos</Title>
      <Typography component='p' variant='h4'>
        {points ? points : 0}
      </Typography>
      <Button
        variant='contained'
        color='secondary'
        component={Link}
        to='/categories/create'
        style={{ marginBottom: '1rem' }}
      >
        Resgatar Pontos
      </Button>
      {/*<Link color='primary' href='#' onClick={preventDefault}>*/}
      {/*  View balance*/}
      {/*</Link>*/}
    </Paper>
  );
}
