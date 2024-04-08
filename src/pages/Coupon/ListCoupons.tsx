import { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Box, Container, Grid, Paper } from '@mui/material';
import Points from './Points';
import api from '@/services/api';
import { useCouponData } from '@/hooks/useCouponData';

export default function ListCoupons() {
  const { data } = useCouponData();
  const { enqueueSnackbar } = useSnackbar();
  // const [options, setOptions] = useState({
  //   page: 0,
  //   perPage: 10,
  //   rowsPerPage: [10, 20, 30],
  // });

  // const { data, isFetching, error } = useGetCouponsQuery(options);

  // function handleOnPageChange(page: number) {
  //   setOptions({ ...options, page: page + 1 });
  // }
  //
  // function handleOnPageSizeChange(perPage: number) {
  //   setOptions({ ...options, perPage });
  // }
  //
  // useEffect(() => {
  //   handleGetPoints();
  // }, [handleGetPoints]);

  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <Points points={0} />
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Box display='flex' justifyContent='flex-end'></Box>
            {/*<CouponsTable*/}
            {/*  data={data}*/}
            {/*  isFetching={loading}*/}
            {/*  perPage={options.perPage}*/}
            {/*  rowsPerPage={options.rowsPerPage}*/}
            {/*  handleOnPageChange={handleOnPageChange}*/}
            {/*  handleOnPageSizeChange={handleOnPageSizeChange}*/}
            {/*  // handleFilterChange={handleFilterChange}*/}
            {/*/>*/}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
