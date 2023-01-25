import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {createImageBoard} from "./imageBoardsThunks";

interface ImageBoardState {
    sendLoading: boolean;
}

const initialState: ImageBoardState = {
    sendLoading: false,
}

export const imageBoardSlice = createSlice({
    name: 'imageBoards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createImageBoard.pending, (state) => {
            state.sendLoading = true;
        });
        builder.addCase(createImageBoard.fulfilled, (state) => {
            state.sendLoading = false;
        });
        builder.addCase(createImageBoard.rejected, (state) => {
            state.sendLoading = false;
        });
    }
});

export const imageBoardsReducer = imageBoardSlice.reducer;
export const selectSendLoading = (state: RootState) => state.imageBoards.sendLoading;
