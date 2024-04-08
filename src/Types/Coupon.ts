export interface Results {
  content: Coupons[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  page: number;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Coupons {
  id: number;
  code: string;
  userId: string;
  customer: null;
  discount: number;
  discountType: 'real' | 'REAL' | 'percentual' | 'PERCENTUAL';
  redeemedAt: Date;
  validity: Date;
  status: boolean;
}

export interface Pageable {
  sort: Sort;
  page: number;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface CouponParams {
  page?: number;
  perPage?: number;
}
