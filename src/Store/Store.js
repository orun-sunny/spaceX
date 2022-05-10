import { configureStore } from '@reduxjs/toolkit';
// import React from 'react';
import spaceReducer from './SpaceSlice'

const Store = configureStore({
    reducer: {
        space: spaceReducer,
        // product: productReducer,
    },
});

export default Store;