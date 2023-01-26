import React from 'react';
import {apiUrl} from "../../../constants";
import {Grid} from "@mui/material";
import {ImageBoardMutation} from "../../../types";

interface Props {
    item: ImageBoardMutation;
}

const BoardItem: React.FC<Props> = ({item}) => {
    return (
        <Grid item>
            <div
                style={{
                    background: item.image ? `url(${apiUrl + '/' + item.image}) center center no-repeat` : 'white',
                    width: '200px',
                    height: '200px',
                    textAlign: 'center',
                    boxSizing: "border-box",
                    padding: '10px',
                    backgroundSize: "cover",
                    border: '2px solid red'
                }}>
                <p>Author: {item.author}</p>
                <p>Message: {item.message}</p>
            </div>
        </Grid>
    );
};

export default BoardItem;