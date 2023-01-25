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
    onMaximizeClick: () => void;
    appId: string;
}

export const Topbar = (props: TopbarProp) => {
    const {
        appId,
        onMaximizeClick,
        ...others
    } = props;

    const {
        handleCloseClick,
        handleMinimizeClick
    } = useTopbar();

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
                backgroundColor: "background.default",
                color: "text.primary",
                display: "flex",
                justifyContent: "flex-end",
                borderRadius: "4px 4px 0 0"
            }}
            onMouseDown={() => document.body.style.cursor = "grabbing"}
            onDoubleClick={onMaximizeClick}
            {...others}
        >
            <Box
                sx={{
                    flex: 1,
                    marginLeft: 1,
                    userSelect: "none"
                }}
            >
                <Typography>
                    {appProps?.title}
                </Typography>
            </Box>
            <Box>
                <ButtonBase onClick={() => handleMinimizeClick(appId)}>
                    <HorizontalRuleSharpIcon
                        sx={{
                            color: "text.primary"
                        }}
                    />
                </ButtonBase>
                <ButtonBase
                    onClick={onMaximizeClick}
                >
                    <CropSquareSharpIcon
                        sx={{
                            color: "text.primary"
                        }}
                    />
                </ButtonBase>
                <ButtonBase
                    onClick={() => handleCloseClick(appId)}
                >
                    <CloseIcon
                        sx={{
                            color: "text.primary"
                        }}
                    />
                </ButtonBase>
            </Box>
        </Box>
    );
}