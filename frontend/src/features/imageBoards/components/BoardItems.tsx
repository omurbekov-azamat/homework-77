import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {selectFetchLoading, selectImageBoards} from "../ImageBoardsSlice";
import {fetchImageBoards} from "../imageBoardsThunks";
import {Grid} from "@mui/material";
import {container} from "../../../constants";
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
        <div style={container}>
            <div style={{height: '500px', overflow: 'auto'}}>
                {loading && <Spinner/>}
                <Grid container direction='row' spacing={2}>
                    {imageBoards.map((item) => (
                        <BoardItem
                            key={Math.random() * 99999}
                            item={item}
                        />
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default BoardItems;