import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const Tab = () => {
    return (
        <Box
            sx={{
                width: 200,
                height: 20,
                backgroundColor: grey[800],
                borderRadius: "6px 6px 0 0",
                padding: "3px 3px 0 4px"
            }}
        >
            New Tab
        </Box>
    );
}

export default Tab;