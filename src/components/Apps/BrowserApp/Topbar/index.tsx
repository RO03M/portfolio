import { Box, IconButton, InputBase } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tab from "./Tab";
import { grey } from "@mui/material/colors";
import { useState } from "react";

interface Props {
    onSearchConfirm: (value: string) => void;
}

const Topbar = (props: Props) => {

    const {
        onSearchConfirm
    } = props;

    const [search, setSearch] = useState<string>("");

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.currentTarget.value);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => event.key === "Enter" && onSearchConfirm(search);

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
                    value={search}
                    onChange={onSearch}
                    onKeyDown={handleKeyDown}
                    placeholder={"Search Browser or type a URL"}
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