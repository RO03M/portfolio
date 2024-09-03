import { Box, Menu, MenuItem, MenuList, Paper, Popover } from "@mui/material";
import { Window } from "../Window";
import { useEffect, useRef, useState } from "react";
import { Dock } from "../Dock";
import { useAppsStore } from "../../stores/apps";

import mainBackground from "../../assets/images/mainBackground.jpeg";
import styles from "./index.module.css";
import Desktop from "../Desktop";
import { AnimatePresence } from "framer-motion";

const OS = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const osRef = useRef<HTMLDivElement>(null);
    const apps = useAppsStore((store) => store.apps);

    useEffect(() => setAnchorEl(osRef.current), []);

    return (
        <Box
            className={styles.os}
            ref={osRef}
            sx={{
                width: "100%",
                height: "100%",
                // backgroundImage: `url(${mainBackground})`,
                background: "linear-gradient(135deg, #08203e 0%, #557c93 100%)",
                backgroundSize: "cover"
            }}
        >
            <Desktop/>
            <AnimatePresence>
                {apps?.map((app) => !app.hidden && (
                    <Window
                        key={app.id}
                        osRef={osRef}
                        x={app.x}
                        y={app.y}
                        appId={app.id}
                        data-hidden={app.hidden}
                        AppComponent={app.component}
                    />
                ))}
            </AnimatePresence>
            <Dock/>
        </Box>
    );
}

export default OS;