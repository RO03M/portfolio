import { Box, ButtonBase, Divider, IconButton } from "@mui/material";

import AppsIcon from '@mui/icons-material/Apps';
import { DockApps } from "./DockApps";
import { Reorder } from "framer-motion";

export const Dock = () => {

    return (
        <Box
            id={"main-dock"}
            sx={{
                width: "100%",
                height: "2em",
                padding: 1.2,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                position: "absolute",
                bottom: 0,
                display: "flex",
                alignItems: "center"
            }}
        >
            <Box>
                <IconButton
                    aria-label={"toggle apps"}
                    sx={{
                        color: "#fff",
                        borderRadius: 2
                    }}
                >
                    <AppsIcon/> 
                </IconButton>
            </Box>
            <Divider
                orientation={"vertical"}
                variant={"middle"}
                flexItem
            />
            <DockApps/>
        </Box>
    );
}
