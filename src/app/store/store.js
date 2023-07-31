import {configureStore} from '@reduxjs/toolkit';
import {spaceXApi} from '../../shared/api/spaceXApi';

const store = configureStore(
    {
        reducer: {
            [spaceXApi.reducerPath]: spaceXApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(spaceXApi.middleware),
    }
);

export default store;