import { Box, ButtonBase, IconButton } from "@mui/material";

import WifiIcon from '@mui/icons-material/Wifi';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import useDate from "../../../hooks/useDate";

const DockRight = () => {

    const {
        padHours,
        padMinutes,
        padMonthDay,
        month,
        year
    } = useDate();

    return (
        <Box
            id={"dock-right"}
            sx={{
                color: "#fff",
                display: "flex",
                height: "100%"
            }}
        >
            <ButtonBase
                sx={{
                    padding: "0 4px"
                }}
            >
                <WifiIcon
                    fontSize={"small"}
                />
            </ButtonBase>
            <ButtonBase
                sx={{
                    padding: "0 4px"
                }}
            >
                <VolumeDownIcon
                    fontSize={"small"}
                />
            </ButtonBase>
            <ButtonBase
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 12px"
                }}
            >
                <Box>
                    {padHours}:{padMinutes}
                </Box>
                <Box>
                    {padMonthDay}/{month.padValue}/{year.longValue}
                </Box>
            </ButtonBase>
        </Box>
    );
}

export default DockRight;