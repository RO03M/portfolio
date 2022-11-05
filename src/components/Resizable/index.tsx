import { Box } from "@mui/material";
import { ReactNode, RefObject, useEffect, useState } from "react";
import { Bottom, BottomLeft, BottomRight, Left, ResizePoints, Right, Top, TopLeft, TopRight } from "./resizePoints";

import { motion } from "framer-motion";

interface IResizable {
    /**@description To resize component */
    parentRef: RefObject<HTMLDivElement>;
    children: ReactNode;
    offset?: number;
}

export const Resizable = (props: IResizable) => {

    const {
        parentRef,
        children,
        offset = 5
    } = props;

    const [resizing, setResizing] = useState<boolean>(false);
    const [currentResizingPoint, setCurrentResizingPoint] = useState<ResizePoints | null>(null);

    return (
        <Box
            data-resizable
            sx={{
                width: "100%",
                height: "100%",
                position: "relative"
            }}
        >
            {/* <TopLeft/>
            <TopRight/>
            <BottomRight/>
            <BottomLeft/> */}
            {/* <Top/>
            <Right/>
            <Bottom/>
            <Left/> */}
            <motion.div>

            </motion.div>
            {children}
        </Box>
    );
}
