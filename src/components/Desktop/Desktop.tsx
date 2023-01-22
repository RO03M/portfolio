import { Box } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import { useItemsStore } from "../../stores/items/items";
import { getGridSize, makeArrayStep } from "./Desktop.helper";
import Item from "./Item";

const Desktop = () => {

    const items = useItemsStore((store) => store.items);

    const {
        width: windowWidth,
        height: windowHeight
    } = useWindowSize();

    const {
        width: gridWidth,
        height: gridHeight
    } = getGridSize();

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%"
            }}
        >
            {(() => {
                const widthSteps = makeArrayStep(windowWidth, windowWidth / gridWidth);
                const heightSteps = makeArrayStep(windowHeight, windowHeight / gridHeight);
                return items.map((item) => (
                    <Item
                        id={item.id}
                        key={item.id}
                        component={item.appComponent}
                        widthSteps={widthSteps}
                        heightSteps={heightSteps}
                        gridWidth={gridWidth}
                        gridHeight={gridHeight}
                        initialGridX={item.gridX}
                        initialGridY={item.gridY}
                    />
                ))
            })()}
        </Box>
    );
}

export default Desktop;