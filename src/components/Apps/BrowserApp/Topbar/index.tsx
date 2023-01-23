import { Box, IconButton, InputBase } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tab from "./Tab";
import { grey } from "@mui/material/colors";

const Topbar = () => {
    return (
        <Box
            sx={{
                width: "100%"
            }}
        >
            <Tab/>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: grey[800],
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <IconButton>
                    <ArrowBackIcon/>
                </IconButton>
                <IconButton>
                    <ArrowForwardIcon/>
                </IconButton>
                <IconButton>
                    <RefreshIcon/>
                </IconButton>
                <InputBase
                    defaultValue={"url link"}
                    placeholder={"Search Google or type a URL"}
                    sx={{
                        backgroundColor: grey[900],
                        margin: 0.3,
                        borderRadius: 5,
                        flex: 1,
                        fontSize: 14,
                        height: 32
                    }}
                    startAdornment={
                        <IconButton>
                            <LockIcon/>
                        </IconButton>
                    }
                />
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default Topbar;