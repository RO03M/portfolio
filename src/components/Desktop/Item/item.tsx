import { useTheme } from "@mui/material";
import { alpha, styled } from "@mui/system";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { closest, closestCeil, closestFloor } from "../../../helpers/closest";
import { useAppsStore } from "../../../stores/apps";
import { DesktopItem, useItemsStore } from "../../../stores/items/items";

interface ItemProps {
    item: DesktopItem;
    widthSteps: number[];
    heightSteps: number[];
    gridWidth: number;
    gridHeight: number;
    component: () => JSX.Element;
}

const itemWidth = 80;
const itemHeight = 80;

export function Item(props: ItemProps) {
    const {
        item,
        widthSteps,
        heightSteps,
        gridWidth,
        gridHeight,
        component,
    } = props;

    const {
        id,
        title,
        icon,
        gridX,
        gridY
    } = item;

    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [placeholderBackground, setPlaceholderBackground] = useState<string>("transparent");
    const [[lastX, lastY], setLastPos] = useState<[number, number]>([
        closestFloor(gridX * gridWidth, widthSteps) + (gridWidth * 0.5 - itemWidth * 0.5),
        closestFloor(gridY * gridHeight, heightSteps) + (gridHeight * 0.5 - itemHeight * 0.5)
    ]);

    const theme = useTheme();

    const x = useMotionValue(gridX * gridWidth);
    const y = useMotionValue(gridY * gridHeight);
    const xPlaceholder = useMotionValue(gridX * gridWidth);
    const yPlaceholder = useMotionValue(gridY * gridHeight);
    
    const [
        updateItemPosition,
        isGridOccupied
    ] = useItemsStore((store) => [
        store.updateItemPosition,
        store.isGridOccupied
    ]);

    const openApp = useAppsStore((store) => store.openApp);

    useEffect(() => setPlaceholderBackground(alpha(theme.palette.primary.main, .2)), []);

    useEffect(() => {
        if (!isDragging && widthSteps && heightSteps) {
            const currentGridX = Math.floor(x.get() / gridWidth);
            const currentGridY = Math.floor(y.get() / gridHeight);
            if (isGridOccupied(id, currentGridX, currentGridY)) {
                x.set(lastX);
                y.set(lastY);
            } else {
                const xItem = closestFloor(x.get(), widthSteps) + (gridWidth * 0.5 - itemWidth * 0.5);
                const yItem = closestFloor(y.get(), heightSteps) + (gridHeight * 0.5 - itemHeight * 0.5);
                
                x.set(xItem);
                y.set(yItem);
                setLastPos([xItem, yItem]);
            }
        }
    }, [isDragging, widthSteps, heightSteps]);
    
    return (
        <div
            id={`draggable-item-${id}`}
            onDoubleClick={() => openApp(item)}
        >
            <AnimatePresence>
                {isDragging && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: xPlaceholder.get(),
                            y: yPlaceholder.get()
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.9
                        }}
                        transition={{
                            x: { duration: .08 },
                            y: { duration: .08 },
                            opacity: { duration: .2 }
                        }}
                        style={{
                            width: gridWidth,
                            height: gridHeight,
                            position: "absolute",
                            backgroundColor: placeholderBackground,
                            borderRadius: "16px",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                            backdropFilter: "blur(7px)",
                            border: "1px solid rgba(255, 255, console.log()255, 0.03)",
                        }}
                    />
                )}
            </AnimatePresence>
            <motion.div
                style={{
                    position: "absolute",
                    width: itemWidth,
                    height: itemHeight,
                    ...(icon ? {backgroundImage: `url(${icon})`} : {backgroundColor: "white"}),
                    backgroundSize: "cover",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    x: x,
                    y: y
                }}
                drag
                dragTransition={{
                    power: 0
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => {
                    const currentGridX = Math.floor(x.get() / gridWidth);
                    const currentGridY = Math.floor(y.get() / gridHeight);
                    updateItemPosition(id, currentGridX, currentGridY);
                    setIsDragging(false);
                }}
                onDrag={() => {
                    const currentPlaceholderX = closestFloor(x.get(), widthSteps);
                    const currentPlaceholderY = closestFloor(y.get(), heightSteps);
                    
                    if ((xPlaceholder.get() !== xPlaceholder.getPrevious()) || (yPlaceholder.get() !== yPlaceholder.getPrevious())) {
                        const currentGridX = Math.floor(x.get() / gridWidth);
                        const currentGridY = Math.floor(y.get() / gridHeight);
                        
                        if (isGridOccupied(id, currentGridX, currentGridY)) setPlaceholderBackground(alpha(theme.palette.warning.main, .2));
                        else setPlaceholderBackground(alpha(theme.palette.primary.main, .2));
                    }

                    xPlaceholder.set(currentPlaceholderX);
                    yPlaceholder.set(currentPlaceholderY);
                }}
            />
            <motion.div
                style={{
                    x,
                    y,
                    color: "white",
                    width: itemWidth,
                    textAlign: "center",
                    userSelect: "none",
                    position: "absolute",
                    marginTop: "5.4em",
                }}
            >
                <motion.p
                    style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)"
                    }}
                >
                    {title}
                </motion.p>
            </motion.div>
        </div>
    );
}
