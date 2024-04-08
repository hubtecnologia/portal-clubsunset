import { apiSlice } from '@/pages/Api/apiSlice';
import { CouponParams, Results } from '@/Types/Coupon';

const endpointUrl = '/coupon';

function parseQueryParams(params: CouponParams) {
  const query = new URLSearchParams();
  if (params.page) {
    query.append('page', params.page.toString());
  }
  if (params.perPage) {
    query.append('size', params.perPage.toString());
  }

  return query.toString();
}

function getCoupons({ page = 1, size = 10 }) {
  const params = { page, size };
  return `${endpointUrl}?${parseQueryParams(params)}`;
}

export const couponsApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    getCoupons: query<Results, CouponParams>({
      query: getCoupons,
      providesTags: ['Coupons'],
    }),
  }),
});

export const { useGetCouponsQuery } = couponsApiSlice;
