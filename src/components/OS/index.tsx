import { Box, Paper } from "@mui/material";
import { Window } from "../Window";
import { useRef } from "react";
import { Dock } from "../Dock";
import { useAppsStore } from "../../stores/apps";

import mainBackground from "../../assets/images/mainBackground.jpeg";
import styles from "./index.module.css";

const OS = () => {
    
    const osRef = useRef<HTMLDivElement>(null);
    const apps = useAppsStore((store) => store.apps);
    
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
            {apps?.map((app) => !app.hidden && (
                <Window
                    key={app.id}
                    osRef={osRef}
                    x={app.x}
                    y={app.y}
                    appId={app.id}
                    data-hidden={app.hidden}
                />
            ))}
            <Dock/>
        </Box>
    );
}

export default OS;