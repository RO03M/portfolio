import React, { useEffect } from "react";
import { Box, ButtonBase } from "@mui/material";
import { motion } from "framer-motion";

import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
import CloseIcon from '@mui/icons-material/Close';
import { useTopbar } from "./useTopbar";

interface TopbarProp {
    onPointerDown: React.PointerEventHandler<HTMLDivElement>;
    windowId: number;
}

export const Topbar = (props: TopbarProp) => {

    const {
        handleCloseClick
    } = useTopbar();

    const {
        windowId,
        ...others
    } = props;

    useEffect(() => {
        document.addEventListener("mouseup", () => document.body.style.cursor = "inherit");
        return () => document.removeEventListener("mouseup", () => document.body.style.cursor = "inherit");
    }, []);

    return (
        <Box
            component={motion.div}
            sx={{
                width: "100%",
                height: 25,
                backgroundColor: "primary.main",
                display: "flex",
                justifyContent: "flex-end"
            }}
            onMouseDown={() => document.body.style.cursor = "grabbing"}
            {...others}
        >
            <p>{windowId}</p>
            <ButtonBase>
                <HorizontalRuleSharpIcon
                    sx={{
                        color: "black"
                    }}
                />
            </ButtonBase>
            <ButtonBase>
                <CropSquareSharpIcon
                    sx={{
                        color: "black"
                    }}
                />
            </ButtonBase>
            <ButtonBase
                onClick={() => handleCloseClick(windowId)}
            >
                <CloseIcon
                    sx={{
                        color: "black"
                    }}
                />
            </ButtonBase>
        </Box>
    );
}