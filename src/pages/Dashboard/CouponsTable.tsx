import { IconButton, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid';
import { Results } from '@/Types/Coupon';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { formatCouponValue } from '@/utils';

type Props = {
  data: Results | undefined;
  perPage: number;
  isFetching: boolean;
  rowsPerPage?: number[];

  handleOnPageChange?: (page: number) => void;
  handleFilterChange?: (filterModel: GridFilterModel) => void;
  handleOnPageSizeChange?: (perPage: number) => void;
  handleDelete?: (id: string) => void;
};

export function CouponsTable({
  data,
  perPage,
  isFetching,
  rowsPerPage,
  handleOnPageChange,
  handleFilterChange,
  handleOnPageSizeChange,
}: Props) {
  const componentProps = {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  };

  const columns: GridColDef[] = [
    { field: 'code', headerName: 'Codigo', flex: 1, renderCell: renderNameCell },
    {
      field: 'discount',
      headerName: 'Desconto',
      flex: 1,
      type: 'text',
      renderCell: renderDiscountCell,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      type: 'boolean',
      renderCell: renderIsActiveCell,
    },
  ];

  function mapDataToGridRows(data: Results) {
    return data.content.map((coupon) => ({
      id: coupon.id,
      code: coupon.code,
      discount: formatCouponValue(coupon.discountType, coupon.discount),
      status: coupon.status,
      created_at: new Date(coupon.validity).toLocaleDateString('pt-BR'),
    }));
  }

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link style={{ textDecoration: 'none' }} to={`/categories/edit/${rowData.id}`}>
        <Typography color='primary'>{rowData.value}</Typography>
      </Link>
    );
  }

  function renderIsActiveCell(rowData: GridRenderCellParams) {
    return (
      <Typography color={rowData.value ? 'primary' : 'secondary'}>
        {rowData.value ? 'Ativo' : 'Expirado'}
      </Typography>
    );
  }

  function renderDiscountCell(rowData: GridRenderCellParams) {
    return <Typography color={rowData.value ? 'primary' : 'secondary'}>{rowData.value}</Typography>;
  }

  const rows = data ? mapDataToGridRows(data) : [];
  const rowCount = data?.numberOfElements || 0;

  return (
    <Box sx={{ display: 'flex', height: 600 }}>
      <DataGrid
        rows={rows}
        pagination={true}
        columns={columns}
        pageSize={perPage}
        filterMode='server'
        rowCount={rowCount}
        loading={isFetching}
        paginationMode='server'
        checkboxSelection={false}
        disableColumnFilter={true}
        disableColumnSelector={true}
        disableDensitySelector={true}
        rowsPerPageOptions={rowsPerPage}
        componentsProps={componentProps}
        onPageChange={handleOnPageChange}
        components={{ Toolbar: GridToolbar }}
        onFilterModelChange={handleFilterChange}
        onPageSizeChange={handleOnPageSizeChange}
      />
    </Box>
  );
}
