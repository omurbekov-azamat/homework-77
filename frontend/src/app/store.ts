import {configureStore} from "@reduxjs/toolkit";
import {imageBoardsReducer} from "../features/imageBoards/ImageBoardsSlice";

export const store = configureStore({
    reducer: {
        imageBoards: imageBoardsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;