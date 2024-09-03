import { Box } from "@mui/material";
import React, { useMemo, useRef, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { useItemsStore } from "../../stores/items/items";
import ContextPopover from "./ContextPopover";
import { getGridSize, makeArrayStep } from "./Desktop.helper";
import { Item } from "./Item/item";
import { useSelectBox } from "./useSelectBox";

const Desktop = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [menuX, setMenuX] = useState<number>(0);
    const [menuY, setMenuY] = useState<number>(0);

    const containerRef = useRef(null);

    const { items } = useItemsStore();

    const selectBox = useSelectBox(containerRef);

    const {
        width: windowWidth,
        height: windowHeight
    } = useWindowSize();

    const {
        width: gridWidth,
        height: gridHeight
    } = getGridSize();

    const widthSteps = useMemo(() => {
        return makeArrayStep(windowWidth, windowWidth / gridWidth);
    }, [windowWidth, gridWidth]); 

    const heightSteps = useMemo(() => {
        return makeArrayStep(windowHeight, windowHeight / gridHeight);
    }, [windowHeight, gridHeight]);

    const handleContextOpen = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const x = event.clientX;
        const y = event.clientY;
        if (menuOpen && x === menuX && y === menuY) setMenuOpen(false);
        else {
            setMenuOpen(true);
            setMenuX(x);
            setMenuY(y);
        }
    }

    const handleContextClose = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setMenuOpen(false);
    }

    return (
        <Box
            onContextMenu={handleContextOpen}
            onClick={handleContextClose}
            ref={containerRef}
            sx={{
                width: "100%",
                height: "100%"
            }}
        >
            <ContextPopover
                open={menuOpen}
                x={menuX}
                y={menuY}
            />
            {(() => {
                
                return items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        // id={item.id}
                        // key={item.id}
                        // icon={item.icon}
                        // title={item.title}
                        component={item.appComponent}
                        widthSteps={widthSteps}
                        heightSteps={heightSteps}
                        gridWidth={gridWidth}
                        gridHeight={gridHeight}
                        // initialGridX={item.gridX}
                        // initialGridY={item.gridY}
                    />
                ))
            })()}
        </Box>
    );
}

export default Desktop;