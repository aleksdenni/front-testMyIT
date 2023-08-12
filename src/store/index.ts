import {Action, configureStore, getDefaultMiddleware, ThunkAction} from '@reduxjs/toolkit';
import { useDispatch} from "react-redux";
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : []))
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// @ts-ignore
window.store = store