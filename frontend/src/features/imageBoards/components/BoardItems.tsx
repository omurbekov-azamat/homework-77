import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {selectFetchLoading, selectImageBoards} from "../ImageBoardsSlice";
import {fetchImageBoards} from "../imageBoardsThunks";
import {Box, Container, Grid} from "@mui/material";
import Spinner from "../../../components/UI/Spinner/Spinner";
import BoardItem from "./BoardItem";

const BoardItems = () => {
    const dispatch = useAppDispatch();
    const imageBoards = useAppSelector(selectImageBoards);
    const loading = useAppSelector(selectFetchLoading);

    useEffect(() => {
        dispatch(fetchImageBoards());
    }, [dispatch]);

    return (
        <Container maxWidth='xl'>
            <Box sx={{height: 500, flexGrow: 1, overflowY: 'auto'}}>
                {loading && <Spinner/>}
                <Grid container direction='row' spacing={2}>
                    {imageBoards.map((item) => (
                        <BoardItem
                            key={Math.random() * 99999}
                            item={item}
                        />
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default BoardItems;