import { Box } from "@mui/material";
import { useDesktopStore } from "../../stores/desktop";
import Item from "./Item";

const Desktop = () => {

    const items = useDesktopStore((store) => store.items);

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "blue"
            }}
        >
            
        </Box>
    );
}

export default Desktop;