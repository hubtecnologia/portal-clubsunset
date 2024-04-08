import { useEffect, useState } from 'react';
import { Box, Button, Grid, Link, Typography } from '@mui/material';
import logo from '@/assets/logo-cs.svg';
import { keycloak } from '@/keycloakConfig';
import Paper from '@mui/material/Paper';

function Copyright(props: any) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://clubsunset.tech/'>
        ClubSunset
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      <br />
      {'v1.0.0 '}
    </Typography>
  );
}

export default function SignIn() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imageUrls = [
      'https://res.cloudinary.com/dxin0mfj4/image/upload/v1682431925/Acai%20Sunset/DSCF3050_z4ymvm.jpg',
      'https://res.cloudinary.com/dxin0mfj4/image/upload/v1682432059/Acai%20Sunset/DSCF3062_msdtel.jpg',
      'https://res.cloudinary.com/dxin0mfj4/image/upload/v1682425781/Acai%20Sunset/DSCF3402_wpwqlq.jpg',
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    setImageUrl(randomImageUrl);
  }, []);

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          <Paper
            sx={{ mt: 1, px: 5, py: 5, width: 500, justifyContent: 'center', alignItems: 'center' }}
            elevation={6}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
              justifyContent='center'
              alignItems='center'
            >
              <img alt='asd' src={logo} width={150} />
              <Typography component='h1' variant='h5'>
                Entrar na Conta
              </Typography>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={() => keycloak.login()}
              >
                Entrar
              </Button>
              <Box sx={{ display: 'flex' }} justifyContent='flex-end'>
                <Link href='#' variant='body2'>
                  {'Não tem uma conta? Crie aqui!'}
                </Link>
              </Box>
            </Box>

            <Copyright sx={{ mt: 5 }} />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}
