import { Box } from "@mui/material";
import IFrameApp from "../IFrameApp";
import Topbar from "./Topbar";

const BrowserApp = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%"
            }}
        >
            <Topbar/>
            {/* <IFrameApp
                src={"https://www.google.com/webhp?igu=1"}
            /> */}
        </Box>
    );
}

export default BrowserApp;