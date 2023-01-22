import { Box, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import OSIcon from "../../../assets/images/OSIcon";

interface Props {
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

const OSLoadingScreen = (props: Props) => {

    const {
        setLoaded
    } = props;

    const [progress, setProgress] = useState<number>(0)

    const getDiff = (value: number) => {
        if (value > 40 && value < 65) return 30;
        else if (value >= 65 && value < 90) return 10;
        else if (value >= 90) return 2.5;
        else return 20;
    }

    useEffect(() => {
        if (progress >= 100) setLoaded(true);
    }, [progress]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev === 100) return 100;

                const diff = Math.random() * getDiff(prev);
                return Math.min(prev + diff, 100);
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            exit={{
                opacity: .4
            }}
            style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                zIndex: 1000,
                backgroundColor: "#FFEFCA",
                flexDirection: "column",
            }}
        >
            <OSIcon/>
            <Box
                sx={{
                    width: "20vw",
                    marginBottom: 8
                }}
            >
                <LinearProgress
                    variant={"determinate"}
                    value={progress}
                />
            </Box>
            <Typography
                fontSize={20}
                fontWeight={700}

            >
                Just a moment...
            </Typography>
        </motion.div>
    );
}

export default OSLoadingScreen;