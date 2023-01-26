import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {createImageBoard, fetchImageBoards} from "./imageBoardsThunks";
import {ImageBoardMutation} from "../../types";

interface ImageBoardState {
    sendLoading: boolean;
    items: ImageBoardMutation[];
    fetchBoards: boolean;
}

const initialState: ImageBoardState = {
    sendLoading: false,
    items: [],
    fetchBoards: false,
};

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
        builder.addCase(fetchImageBoards.pending, (state) => {
            state.fetchBoards = true;
        });
        builder.addCase(fetchImageBoards.fulfilled, (state, {payload: imageBoards}) => {
            state.fetchBoards = false;
            state.items = imageBoards;
        });
        builder.addCase(fetchImageBoards.rejected, (state) => {
            state.fetchBoards = false;
        });
    }
});

export const imageBoardsReducer = imageBoardSlice.reducer;
export const selectSendLoading = (state: RootState) => state.imageBoards.sendLoading;
export const selectImageBoards = (state: RootState) => state.imageBoards.items;
export const selectFetchLoading = (state: RootState) => state.imageBoards.fetchBoards;
