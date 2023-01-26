import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {AppDispatch} from "../../app/store";
import {ImageBoardMutation} from "../../types";

export const fetchImageBoards = createAsyncThunk<ImageBoardMutation[]>(
    'imageBoards/fetchAll',
    async () => {
        const response = await axiosApi.get<ImageBoardMutation[]>('/imageBoards');
        return response.data;
    }
);

export const createImageBoard = createAsyncThunk<void, ImageBoardMutation, {dispatch: AppDispatch}>(
    'imageBoards/create',
    async (imageBoard, thunkAPI) => {

        const formData = new FormData();

        const keys = Object.keys(imageBoard) as (keyof ImageBoardMutation)[];

        keys.forEach(key => {
            const value = imageBoard[key];
            if (value !== null) {
                formData.append(key, value);
            }
        });

        await axiosApi.post('/imageBoards', formData);
        thunkAPI.dispatch(fetchImageBoards());
    }
);

