// import {
//   Action,
//   combineReducers,
//   configureStore,
//   PreloadedState,
//   ThunkAction,
// } from '@reduxjs/toolkit';
// import { couponsApiSlice } from '@/pages/Coupon/couponSlice';
// import { pointsApiSlice } from '@/pages/Dashboard/pointsApiSlice';
// import { authSlice } from '@/pages/Auth/authSlice';
// import { apiSlice } from '@/pages/Api/apiSlice';
//
// const rootReducer = combineReducers({
//   [apiSlice.reducerPath]: apiSlice.reducer,
//   [couponsApiSlice.reducerPath]: apiSlice.reducer,
//   [pointsApiSlice.reducerPath]: apiSlice.reducer,
//   auth: authSlice.reducer,
// });
//
// export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
//   });
// };
//
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore['dispatch'];
// export type RootState = ReturnType<typeof rootReducer>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
