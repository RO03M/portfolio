import { Box } from "@mui/material";
import { useState } from "react";
import IFrameApp from "../IFrameApp";
import Topbar from "./Topbar";

const BrowserApp = () => {

    const [search, setSearch] = useState<string>("https://www.google.com/webhp?igu=1");

    const onSearchConfirm = (value: string) => setSearch(value);
    
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%"
            }}
        >
            <Topbar
                onSearchConfirm={onSearchConfirm}
            />
            <IFrameApp
                src={search}
            />
        </Box>
    );
}

export default BrowserApp;