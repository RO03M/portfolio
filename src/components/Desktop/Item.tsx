import { useTheme } from "@mui/material";
import { alpha, styled } from "@mui/system";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { closest, closestCeil, closestFloor } from "../../helpers/closest";

interface ItemProps {
    widthSteps: number[];
    heightSteps: number[];
    gridWidth: number;
    gridHeight: number;
}

const itemWidth = 50;
const itemHeight = 50;

const Item = (props: ItemProps) => {
    
    const {
        widthSteps,
        heightSteps,
        gridWidth,
        gridHeight
    } = props;

    const [isDragging, setIsDragging] = useState<boolean>(false);
    
    const theme = useTheme();

    const x = useMotionValue(100);
    const y = useMotionValue(100);
    const xPlaceholder = useMotionValue(100);
    const yPlaceholder = useMotionValue(100);
    
    useEffect(() => {
        if (!isDragging && widthSteps && heightSteps) {
            const xItem = closestFloor(x.get(), widthSteps) + (gridWidth * 0.5 - itemWidth * 0.5);
            const yItem = closestFloor(y.get(), heightSteps) + (gridHeight * 0.5 - itemHeight * 0.5);
            x.set(xItem);
            y.set(yItem);
        }
    }, [isDragging, widthSteps, heightSteps]);
    
    return (
        <>
            <AnimatePresence>
                {isDragging && (
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0
                        }}
                        transition={{
                            x: { duration: 10 },
                            opacity: { duration: .1 }
                        }}
                        style={{
                            x: xPlaceholder,
                            y: yPlaceholder,
                            width: gridWidth,
                            height: gridHeight,
                            position: "absolute",
                            backgroundColor: alpha(theme.palette.primary.main, .2),
                            borderRadius: "16px",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                            backdropFilter: "blur(7px)",
                            border: "1px solid rgba(255, 255, 255, 0.03)",
                        }}
                    />
                )}
            </AnimatePresence>
            <motion.div
                style={{
                    width: itemWidth,
                    height: itemHeight,
                    backgroundColor: "white",
                    borderRadius: "5px",
                    x,
                    y
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
                onDragEnd={() => setIsDragging(false)}
                onDrag={() => {
                    xPlaceholder.set(closestFloor(x.get(), widthSteps));
                    yPlaceholder.set(closestFloor(y.get(), heightSteps));
                }}
            />
            <motion.div
                style={{
                    x,
                    y,
                    color: "white",
                    width: 50,
                    textAlign: "center",
                    userSelect: "none"
                }}
            >
                <p contentEditable>Please shut the fuck up</p>
            </motion.div>
        </>
    );
}

export default Item;