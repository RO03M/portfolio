import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { useDesktopStore } from "../../stores/desktop";
import { getGridSize, makeArrayStep } from "./Desktop.helper";
import DesktopDebugGrid from "./DesktopDebugGrid";
import Item from "./Item";

const Desktop = () => {

    const items = useDesktopStore((store) => store.items);

    const {
        width: windowWidth,
        height: windowHeight
    } = useWindowSize();

    const {
        width: gridWidth,
        height: gridHeight
    } = getGridSize();

    return (
        <>
            {/* <DesktopDebugGrid/> */}
            <Box
                sx={{
                    width: "100%",
                    height: "100%"
                }}
            >
                {(() => {
                    const widthSteps = makeArrayStep(windowWidth, windowWidth / gridWidth);
                    const heightSteps = makeArrayStep(windowHeight, windowHeight / gridHeight);
                    return new Array(1).fill(undefined).map((_, key) => (
                        <Item
                            key={key}
                            widthSteps={widthSteps}
                            heightSteps={heightSteps}
                            gridWidth={gridWidth}
                            gridHeight={gridHeight}
                        />
                    ))
                })()}
            </Box>
        </>
    );
}

export default Desktop;