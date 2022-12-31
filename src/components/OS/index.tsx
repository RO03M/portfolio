import { Box, Paper } from "@mui/material";
import { Window } from "../Window";
import { useRef } from "react";

import mainBackground from "../../assets/images/mainBackground.jpeg";
import styles from "./index.module.css";
import { useOSStore } from "../../stores";

const OS = () => {
    
    const osRef = useRef<HTMLDivElement>(null);
    const windows = useOSStore((store) => store.windows);
    
    return (
        <Box
            className={styles.os}
            ref={osRef}
            sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${mainBackground})`,
                backgroundSize: "cover"
            }}
        >
            {windows?.map((windows, key) => !windows.hidden && (
                <Window
                    key={windows.id}
                    osRef={osRef}
                    x={windows.x}
                    y={windows.y}
                    windowId={windows.id}
                />
            ))}
        </Box>
    );
}

export default OS;