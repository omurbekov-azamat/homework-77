import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {ImageBoardMutation} from "../../types";

export const createImageBoard = createAsyncThunk<void, ImageBoardMutation>(
    'imageBoards/create',
    async (imageBoard) => {

        const formData = new FormData();

        const keys = Object.keys(imageBoard) as (keyof ImageBoardMutation)[];

        keys.forEach(key => {
            const value = imageBoard[key];
            if (value !== null) {
                formData.append(key, value);
            }
        });

        await axiosApi.post('/imageBoards', formData);
    }
);