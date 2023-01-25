import React, {useState} from 'react';
import axiosApi from "../../../axiosApi";
import {Button, Grid, TextField} from "@mui/material";
import FileInput from "../../../components/UI/FileInput/FileInput";
import {ImageBoardMutation} from "../../../types";

const ImageBoardForm = () => {
    const [imageBoard, setImageBoard] = useState<ImageBoardMutation>({
        author: '',
        message: '',
        image: null,
    });

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setImageBoard(prev => ({...prev, [name]: value}));
    };

    const fileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, files} = e.target;
        setImageBoard(prev => ({
            ...prev, [name]: files && files[0] ? files[0] : null,
        }));
    };

    const submitFormHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        const keys = Object.keys(imageBoard) as (keyof ImageBoardMutation)[];
        keys.forEach(key => {
            const value = imageBoard[key];
            if (value !== null) {
                formData.append(key, value);
            }
        });
        await axiosApi.post('/imageBoards', formData);
    };

    return (
        <form onSubmit={submitFormHandler}>
            <Grid container direction="column" spacing={2}>
                <Grid item xs>
                    <TextField
                        id="author" label="author"
                        name="author"
                        value={imageBoard.author}
                        onChange={inputChangeHandler}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        id="message" label="message"
                        name="message"
                        value={imageBoard.message}
                        onChange={inputChangeHandler}
                        required
                    />
                </Grid>
                <Grid item xs>
                    <FileInput
                        onChange={fileInputHandler}
                        name='image'
                        label='image'
                        />
                </Grid>
                <Grid item xs>
                    <Button
                        type="submit"
                        color="success"
                        variant="contained"
                    >
                        Send
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default ImageBoardForm;