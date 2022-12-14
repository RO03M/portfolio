import { Box, Paper } from "@mui/material";
import { motion, useDragControls, useMotionValue } from "framer-motion";
import { PointerEvent, RefObject, useCallback, useEffect, useId, useRef, useState } from "react";
import { useOSStore } from "../../stores";
import { Resizable } from "../Resizable";
import { Topbar } from "./Topbar";
import { useWindow } from "./useWindow";

interface IWindow {
    osRef: RefObject<HTMLDivElement>;
    x: number;
    y: number;
    appId: number;
}

export const Window = (props: IWindow) => {

    const {
        osRef,
        x,
        y,
        appId
    } = props;

    const {
        width,
        height,
        top,
        left,
        handleBottomDrag,
        handleLeftDrag,
        handleRightDrag,
        handleTopDrag,
        handleTopLeftDrag,
        handleTopRightDrag,
        handleBottomRightDrag,
        handleBottomLeftDrag
    } = useWindow();

    const [isDragging, setIsDragging] = useState<boolean>(false);
    
    const dragControls = useDragControls();

    const startDrag = useCallback((event: PointerEvent) => dragControls.start(event), []);

    const debugMode = useOSStore((store) => store.debugMode);

    return (
        <motion.div
            id={`${appId}-window`}
            style={{
                width: width,
                height: height,
                position: "absolute",
                top: top,
                left: left
            }}
            drag
            dragListener={false}
            dragConstraints={osRef}
            dragControls={dragControls}
            dragTransition={{
                power: 0
            }}
            initial={{
                scale: .6
            }}
            animate={{
                scale: 1
            }}
            exit={{
                scale: 0
            }}
        >
            <Box
                component={motion.div}
                sx={{
                    width: "100%",
                    height: 15,
                    ...(debugMode && { backgroundColor: "red" }),
                    position: "absolute",
                    bottom: -5,
                    cursor: "n-resize",
                }}
                drag="y"
                dragElastic={0}
                dragMomentum={false}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                onDrag={handleBottomDrag}
            />
            <Box
                component={motion.div}
                sx={{
                    width: 15,
                    height: "100%",
                    ...(debugMode && { backgroundColor: "red" }),
                    position: "absolute",
                    right: -5,
                    cursor: "w-resize",
                }}
                drag="x"
                dragElastic={0}
                dragMomentum={false}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                onDrag={handleRightDrag}
            />
            <Box
                component={motion.div}
                sx={{
                    width: 15,
                    height: "100%",
                    ...(debugMode && { backgroundColor: "red" }),
                    position: "absolute",
                    left: -5,
                    cursor: "w-resize",
                }}
                drag="x"
                dragElastic={0}
                dragMomentum={false}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                onDrag={handleLeftDrag}
            />
            <Box
                component={motion.div}
                sx={{
                    width: "100%",
                    height: 15,
                    ...(debugMode && { backgroundColor: "red" }),
                    position: "absolute",
                    top: -5,
                    cursor: "n-resize",
                }}
                drag="y"
                dragElastic={0}
                dragMomentum={false}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                onDrag={handleTopDrag}
            />
            <Box
                component={motion.div}
                sx={{
                    width: 15,
                    height: 15,
                    ...(debugMode && { backgroundColor: "blue" }),
                    position: "absolute",
                    top: -5,
                    left: -5,
                    zIndex: 500,
                    cursor: "nw-resize"
                }}
                drag
                dragElastic={0}
                dragMomentum={false}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                onDrag={handleTopLeftDrag}
            />
            <Box
                component={motion.div}
                sx={{
                    width: 15,
                    height: 15,
                    ...(debugMode && { backgroundColor: "blue" }),
                    position: "absolute",
                    top: -5,
                    right: -5,
                    zIndex: 500,
                    cursor: "ne-resize"
                }}
                drag
                dragElastic={0}
                dragMomentum={false}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                onDrag={handleTopRightDrag}
            />
            <Box
                component={motion.div}
                sx={{
                    width: 15,
                    height: 15,
                    ...(debugMode && { backgroundColor: "blue" }),
                    position: "absolute",
                    bottom: -5,
                    right: -5,
                    zIndex: 500,
                    cursor: "nw-resize"
                }}
                drag
                dragElastic={0}
                dragMomentum={false}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                onDrag={handleBottomRightDrag}
            />
            <Box
                component={motion.div}
                sx={{
                    width: 15,
                    height: 15,
                    ...(debugMode && { backgroundColor: "blue" }),
                    position: "absolute",
                    bottom: -5,
                    left: -5,
                    zIndex: 500,
                    cursor: "ne-resize"
                }}
                drag
                dragElastic={0}
                dragMomentum={false}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                onDrag={handleBottomLeftDrag}
            />
            <Topbar
                onPointerDown={startDrag}
                appId={appId}
            />
            <Paper
                sx={{
                    height: "calc(100% - 25px)"
                }}
            />
        </motion.div>
    );
}
