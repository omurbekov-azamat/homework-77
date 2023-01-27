import React from 'react';
import {apiUrl} from "../../../constants";
import {Box, Grid} from "@mui/material";
import {ImageBoardMutation} from "../../../types";

interface Props {
    item: ImageBoardMutation;
}

const BoardItem: React.FC<Props> = ({item}) => {
    return (
        <Grid item>
            <Box
                sx={{
                    textAlign: 'center',
                    minWidth: 200,
                    minHeight: 200,
                    p:2,
                    border: '2px solid red',
                    wordBreak: 'break-all',
                    background: item.image ? `url(${apiUrl + '/' + item.image}) center center no-repeat` : 'white',
                    backgroundSize: 'cover'
            }}
            >
                <p>Author: {item.author}</p>
                <p>Message: {item.message}</p>
            </Box>
        </Grid>
    );
};

export default BoardItem;