import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';

const AppToolbar = () => {
    return (
        <AppBar position="sticky" sx={{mb: 2}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Image Board
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;