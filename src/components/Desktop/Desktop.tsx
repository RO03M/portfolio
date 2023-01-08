import { Box } from "@mui/material";
import { useDesktopStore } from "../../stores/desktop";
import DesktopDebugGrid from "./DesktopDebugGrid";
import Item from "./Item";

const GRID_MIN_SIZE = 100;

const Desktop = () => {

    const items = useDesktopStore((store) => store.items);

    return (
        <>
            <DesktopDebugGrid/>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "blue"
                }}
            >
                <Item/>
            </Box>
        </>
    );
}

export default Desktop;