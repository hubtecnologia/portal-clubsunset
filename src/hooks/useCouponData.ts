import { useQuery } from '@tanstack/react-query';
import api from '@/services';

export const fetchCouponData = async (params: {
  perPage: number;
  page: number;
  rowsPerPage: number[];
}) => {
  const response: any = await api.get(`/coupon?page=${params.page}&pageSize=${params.perPage}`);
  return response.data;
};

export const fetchMyPoints = async () => {
  const response: any = await api.get(`/customer/points`);
  return response.data.points;
};

export function useCouponData() {
  return useQuery({
    queryFn: fetchCouponData,
    queryKey: ['coupons'],
    retry: false,
    refetchInterval: 60 * 5 * 1000,
  });
}
