import React, { useEffect } from "react";
import { Box, ButtonBase, Typography } from "@mui/material";
import { motion } from "framer-motion";

import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
import CloseIcon from '@mui/icons-material/Close';
import { useTopbar } from "./useTopbar";
import { useAppsStore } from "../../../stores/apps";

interface TopbarProp {
    onPointerDown: React.PointerEventHandler<HTMLDivElement>;
    appId: number;
}

export const Topbar = (props: TopbarProp) => {

    const {
        handleCloseClick
    } = useTopbar();

    const {
        appId,
        ...others
    } = props;

    const appProps = useAppsStore((store) => store.apps.find((app) => app.id === appId));

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
                justifyContent: "flex-end",
            }}
            onMouseDown={() => document.body.style.cursor = "grabbing"}
            {...others}
        >
            <Box
                sx={{
                    flex: 1,
                    marginLeft: 1
                }}
            >
                <Typography>
                    {appProps?.title}
                </Typography>
            </Box>
            <Box>
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
                    onClick={() => handleCloseClick(appId)}
                >
                    <CloseIcon
                        sx={{
                            color: "black"
                        }}
                    />
                </ButtonBase>
            </Box>
        </Box>
    );
}