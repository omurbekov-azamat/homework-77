import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {selectSendLoading} from "../ImageBoardsSlice";
import {createImageBoard} from "../imageBoardsThunks";
import {LoadingButton} from "@mui/lab";
import {Container, Grid, TextField} from "@mui/material";
import FileInput from "../../../components/UI/FileInput/FileInput";
import {ImageBoardMutation} from "../../../types";

const ImageBoardForm = () => {
    const dispatch = useAppDispatch();
    const sendLoading = useAppSelector(selectSendLoading);

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
        await dispatch(createImageBoard(imageBoard));
        setImageBoard({
            author: '',
            message: '',
            image: null,
        });
    };

    return (
        <Container maxWidth='xl' sx={{mb: 2}}>
            <form onSubmit={submitFormHandler}>
                <Grid container direction="row" spacing={10} sx={{alignItems: 'center'}}>
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
                        <LoadingButton
                            type='submit'
                            color='secondary'
                            loading={sendLoading}
                            variant='contained'
                        >
                            Send
                        </LoadingButton>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default ImageBoardForm;