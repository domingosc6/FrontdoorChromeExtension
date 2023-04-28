import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const styleBox = {
    maxHeight: "10vh",
    paddingTop: "10px",
    flexGrow: 1,
    boxShadow: 24,
}

export default function SummariesBar() {
    return (
        <Box sx={styleBox}>
            <AppBar position="absolute">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{pl: "37%"}}
                    >
                        Summarizer
                    </Typography>                
                </Toolbar>
            </AppBar>
        </Box>
    );
}