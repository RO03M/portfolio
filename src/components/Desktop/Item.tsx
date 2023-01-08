import { Box } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import closest from "../../helpers/closest";
import useWindowSize from "../../hooks/useWindowSize";
import { makeArrayStep } from "./Desktop.helper";

const GRID_WIDTH = 10;

const Item = () => {
    
    const [isDragging, setIsDragging] = useState<boolean>(false);
    
    const x = useMotionValue(100);
    const y = useMotionValue(100);
    const {
        width: windowWidth,
        height: windowHeight
    } = useWindowSize();
    
    useEffect(() => {
        if (windowWidth && windowHeight) {
            console.log(makeArrayStep(windowWidth, GRID_WIDTH));
            console.log(makeArrayStep(windowHeight, GRID_WIDTH));
            x.set(closest(x.get(), makeArrayStep(windowWidth, GRID_WIDTH)));
            y.set(closest(y.get(), makeArrayStep(windowHeight, GRID_WIDTH)));
        }
    }, [isDragging]);

    return (
        <motion.div
            style={{
                width: 50,
                height: 50,
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
            onDragEnd={(e) => {
                setIsDragging(false);
            }}
        >
        </motion.div>
    );
}

export default Item;