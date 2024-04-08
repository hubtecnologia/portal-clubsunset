import { apiSlice } from '@/pages/Api/apiSlice';
import { Points } from '@/Types/Points';
import { CouponParams } from '@/Types/Coupon';

const endpointURL = '/customer/points';

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

function getPoints({ page = 1, size = 10 }) {
  const params = { page, size };
  return `${endpointURL}?${parseQueryParams(params)}`;
}

export const pointsApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    getPoints: query<Points, CouponParams>({
      query: getPoints,
      providesTags: ['Points'],
    }),
  }),
});

export const { useGetPointsQuery } = pointsApiSlice;
