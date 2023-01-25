import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AmericanMegatrends from "../../../assets/images/boot/AmericanMegatrends";

const BootScreen = () => {

    const [timer, setTimer] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev < 5 ? prev + .5 : prev)
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                position: "absolute",
                backgroundColor: "#000",
                width: "100%",
                height: "100%",
                zIndex: 1000,
                color: "#fff",
                userSelect: "none"
            }}
        >
            <AmericanMegatrends/>
            <Typography
                fontFamily={"BootFont"}
                fontSize={24}
            >
                {timer > 0.5 && (<span>AMBIOS(C)2023 American Megatrends, Inc.<br/><br/></span>)}
                {timer > 1 && (<span>Language: {navigator?.language}<br/><br/></span>)}
                {timer > 1.5 && (<span>UserAgent: {navigator?.userAgent || "Not found"}<br/></span>)}
                {(timer > 1.5 && timer < 3) && (<span>Counting plugins...<br/></span>)}
                {timer >= 3 && ((navigator?.plugins) ? (<span>Plugin Count: {navigator.plugins.length}<br/><br/><br/></span>) : (<span>No plugins found<br/><br/><br/></span>))}
                {timer > 3 && (<span>WAIT...<br/></span>)}
                {timer > 3.5 && (<span>INITIALIZING APP</span>)}
            </Typography>
            <Typography
                fontFamily={"BootFont"}
                fontSize={24}
                sx={{
                    position: "absolute",
                    right: 10,
                    top: 10
                }}
            >
                Alpha 0.0.1
            </Typography>
        </Box>
    );
}

export default BootScreen;