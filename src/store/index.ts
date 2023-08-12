import {configureStore} from '@reduxjs/toolkit';
import logger from "redux-logger";
import {authReducer} from "./auth/authReducer";

export const store = configureStore({
    reducer: {
        auth: authReducer.reducer,
    },
middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : []))
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// @ts-ignore
window.store = store