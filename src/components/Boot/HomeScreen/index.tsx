import { Box, Paper, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import Clock from "./Clock";
import SignIn from "./SignIn";

interface HomeScreenProps {
    onSignIn: () => void;
}

const HomeScreen = (props: HomeScreenProps) => {

    const {
        onSignIn
    } = props;

    const [showClock, setShowClock] = useState<boolean>(true);

    useHotkeys("esc", () => setShowClock((prev) => !prev));

    return (
        <motion.div
            exit={{
                opacity: 0
            }}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(7px)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none"
            }}
        >
            <AnimatePresence>
                {showClock && (
                    <Clock
                        onClick={() => setShowClock(false)}
                    />
                )}
                {!showClock && (
                    <SignIn
                        onSignIn={onSignIn}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default HomeScreen;