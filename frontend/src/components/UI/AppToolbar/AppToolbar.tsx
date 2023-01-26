import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';
import {container} from "../../../constants";

const AppToolbar = () => {
    return (
        <AppBar position="sticky" sx={{mb: 2}}>
            <Toolbar style={container}>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Image Board
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;