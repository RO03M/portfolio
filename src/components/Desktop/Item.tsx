import { styled } from "@mui/system";
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
                            backgroundColor: "orange",
                            position: "absolute",
                            borderRadius: 5
                        }}
                    />
                )}
            </AnimatePresence>
            <motion.div
                style={{
                    width: itemWidth,
                    height: itemHeight,
                    backgroundColor: "red",
                    borderRadius: "5px",
                    x,
                    y
                }}
                drag
                dragTransition={{
                    power: 0
                }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                onDrag={() => {
                    xPlaceholder.set(closestFloor(x.get(), widthSteps));
                    yPlaceholder.set(closestFloor(y.get(), heightSteps));
                }}
            />
        </>
    );
}

export default Item;