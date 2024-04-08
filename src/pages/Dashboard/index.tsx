import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Typography from '@mui/joy/Typography';
import { fetchCouponData, fetchMyPoints } from '@/hooks/useCouponData';
import { formatCouponValue } from '@/utils';
import { CardContent, CardOverflow } from '@mui/joy';
import Points from '@/pages/Dashboard/Points';
import Card from '@mui/joy/Card';
import Paper from '@mui/material/Paper';
import AspectRatio from '@mui/joy/AspectRatio';
import Stack from '@mui/joy/Stack';
import Skeleton from '@mui/joy/Skeleton';
import moment from 'moment';
import IconButton from '@mui/joy/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useQuery } from '@tanstack/react-query';

export default function Dashboard() {
  const [options, setOptions] = useState({
    page: 0,
    perPage: 10,
    rowsPerPage: [10, 20, 30],
  });

  const {
    isLoading,
    isError,
    error,
    data: coupons,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['/coupon', options.page, options.perPage],
    queryFn: () => fetchCouponData(options),
    keepPreviousData: true,
  });

  const { isLoading: loadingPoints, data: points } = useQuery({
    queryKey: ['/customer/points'],
    queryFn: () => fetchMyPoints(),
    keepPreviousData: true,
  });

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Breadcrumbs
          size='sm'
          aria-label='breadcrumbs'
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link underline='none' color='neutral' href='#some-link' aria-label='Home'>
            <HomeRoundedIcon />
          </Link>
          <Link underline='hover' color='neutral' href='#some-link' fontSize={12} fontWeight={500}>
            Dashboard
          </Link>
          <Typography color='primary' fontWeight={500} fontSize={12}>
            Meus Cupons
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mb: 1,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Typography level='h2' component='h1'>
          Meus Cupons
        </Typography>
        <Points points={points} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          mb: 1,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          {isLoading ? (
            <Stack spacing={2} useFlexGap>
              <Card variant='outlined' sx={{ width: 343 }}>
                <AspectRatio ratio='21/9'>
                  <Skeleton loading={isLoading} variant='overlay'>
                    <img
                      alt=''
                      src={
                        isLoading
                          ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                          : 'https://images.unsplash.com/photo-1686548812883-9d3777f4c137?h=400&fit=crop&auto=format&dpr=2'
                      }
                    />
                  </Skeleton>
                </AspectRatio>
                <Typography>
                  <Skeleton loading={isLoading}>
                    {isLoading
                      ? 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'
                      : 'An aerial view of a road in the middle of a forest. This image was uploaded by Dian Yu on Unsplash.'}
                  </Skeleton>
                </Typography>
              </Card>
            </Stack>
          ) : (
            <Box display='flex' sx={{ flexWrap: 'wrap' }} justifyContent='center'>
              {coupons?.content?.map((coupon: any) => {
                return (
                  <Card
                    key={coupon.id}
                    orientation='horizontal'
                    variant='outlined'
                    sx={{
                      width: 200,
                      m: 1,
                      backgroundColor: coupon.status ? 'success.light' : 'danger.200',
                      borderColor: coupon.status ? 'success.plainColor' : 'danger.500',
                    }}
                  >
                    <CardContent>
                      <Typography fontWeight='md' textColor='success.plainColor'>
                        {coupon.code}
                      </Typography>
                      <Typography level='body-sm'>
                        {formatCouponValue(coupon.discountType, coupon.discount)} OFF <br />
                        Valido até: {moment(coupon?.validity).format('DD/MM/YYYY HH:mm:ss')}
                      </Typography>
                    </CardContent>
                    <CardOverflow
                      variant='soft'
                      color='primary'
                      sx={{
                        backgroundColor: coupon.status ? 'success.light' : 'danger.300',
                        px: 0.2,
                        writingMode: 'vertical-rl',
                        justifyContent: 'center',
                        fontSize: 'xs',
                        fontWeight: 'xl',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        borderLeft: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      {formatCouponValue(coupon.discountType, coupon.discount)}
                    </CardOverflow>
                  </Card>
                );
              })}
            </Box>
          )}
          {/*<Box*/}
          {/*  className='Pagination-mobile'*/}
          {/*  sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', py: 2 }}*/}
          {/*>*/}
          {/*  <IconButton aria-label='previous page' variant='outlined' color='neutral' size='sm'>*/}
          {/*    <KeyboardArrowLeftIcon />*/}
          {/*  </IconButton>*/}
          {/*  <Typography level='body-sm' mx='auto'>*/}
          {/*    Page 1 of 10*/}
          {/*  </Typography>*/}
          {/*  <IconButton aria-label='next page' variant='outlined' color='neutral' size='sm'>*/}
          {/*    <KeyboardArrowRightIcon />*/}
          {/*  </IconButton>*/}
          {/*</Box>*/}

          {/*<Box*/}
          {/*  className='Pagination-laptopUp'*/}
          {/*  sx={{*/}
          {/*    pt: 2,*/}
          {/*    gap: 1,*/}
          {/*    [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },*/}
          {/*    display: {*/}
          {/*      xs: 'none',*/}
          {/*      md: 'flex',*/}
          {/*    },*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <Button*/}
          {/*    size='sm'*/}
          {/*    variant='outlined'*/}
          {/*    color='neutral'*/}
          {/*    startDecorator={<KeyboardArrowLeftIcon />}*/}
          {/*    disabled={isPreviousData || coupons.page === 0}*/}
          {/*    onClick={() => setOptions({ ...options, page: coupons.page - 1 })}*/}
          {/*  >*/}
          {/*    Previous*/}
          {/*  </Button>*/}

          {/*  <Box sx={{ flex: 1 }} />*/}
          {/*  {Array.from({ length: coupons.totalPages }, (_, i) => i + 1).map((page) => (*/}
          {/*    <IconButton*/}
          {/*      key={page}*/}
          {/*      size='sm'*/}
          {/*      variant={Number(page) ? 'outlined' : 'plain'}*/}
          {/*      color='neutral'*/}
          {/*      onClick={() => setOptions({ ...options, page })}*/}
          {/*    >*/}
          {/*      {page}*/}
          {/*    </IconButton>*/}
          {/*  ))}*/}
          {/*  <Box sx={{ flex: 1 }} />*/}

          {/*  <Button*/}
          {/*    size='sm'*/}
          {/*    variant='outlined'*/}
          {/*    color='neutral'*/}
          {/*    endDecorator={<KeyboardArrowRightIcon />}*/}
          {/*    disabled={isPreviousData || coupons.page >= coupons.totalPages - 1}*/}
          {/*    onClick={() => setOptions({ ...options, page: coupons.page + 1 })}*/}
          {/*  >*/}
          {/*    Next*/}
          {/*  </Button>*/}
          {/*</Box>*/}
        </Paper>
      </Box>
    </>
  );
}
