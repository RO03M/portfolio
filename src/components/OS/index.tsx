import { Box, Paper } from "@mui/material";
import { Window } from "../Window";
import { useRef } from "react";

import mainBackground from "../../assets/images/mainBackground.jpeg";
import styles from "./index.module.css";

const OS = () => {
    
    const osRef = useRef<HTMLDivElement>(null);

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
            <Window
                osRef={osRef}
            />
        </Box>
    );
}

export default OS;