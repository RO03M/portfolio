import { Box, ButtonBase } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";

import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
import CloseIcon from '@mui/icons-material/Close';

export const Topbar = (props: any) => {

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
            {...props}
        >
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
            <ButtonBase>
                <CloseIcon
                    sx={{
                        color: "black"
                    }}
                />
            </ButtonBase>
        </Box>
    );
}