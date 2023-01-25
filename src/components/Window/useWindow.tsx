import { useMotionValue } from "framer-motion";
import { useState } from "react";
import { clamp } from "../../helpers/clamp";
import { useAppsStore } from "../../stores/apps";

export const useWindow = (id: string) => {

    const [
        updateWindow,
        getWindow
    ] = useAppsStore(store => [
        store.updateWindow,
        store.getWindow
    ]);

    const height = useMotionValue(600);
    const width = useMotionValue(800);
    const top = useMotionValue(0);
    const left = useMotionValue(0);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const resizeBarWidth = 10;
    const resizeBarHeight = 10;

    const handleTopDrag = (event: any, info: any) => {
        event.stopPropagation();
        const newHeight = clamp(height.get() - info.delta.y, 200); 
        if (newHeight !== height.get()) {
            height.set(newHeight);
            top.set(top.get() + info.delta.y);
        }
    }

    const handleTopRightDrag = (event: any, info: any) => {
        event.stopPropagation();
        const newHeight = clamp(height.get() - info.delta.y, 200);
        if (newHeight !== height.get()) {
            height.set(newHeight);
            top.set(top.get() + info.delta.y);
        }

        width.set(clamp(width.get() + info.delta.x, 200));
    }

    const handleRightDrag = (event: any, info: any) => {
        width.set(clamp(width.get() + info.delta.x, 200));
    }

    const handleBottomRightDrag = (event: any, info: any) => {
        event.stopPropagation();
        width.set(clamp(width.get() + info.delta.x, 200));
        height.set(clamp(height.get() + info.delta.y, 200));
    }

    const handleBottomDrag = (event: any, info: any) => {
        height.set(clamp(height.get() + info.delta.y, 200));
    }

    const handleBottomLeftDrag = (event: any, info: any) => {
        event.stopPropagation();
        const newWidth = clamp(width.get() - info.delta.x, 200);
        if (newWidth !== width.get()) {
            width.set(newWidth);
            left.set(left.get() + info.delta.x);
        }
        height.set(clamp(height.get() + info.delta.y, 200));
    }

    const handleLeftDrag = (event: any, info: any) => {
        const newWidth = clamp(width.get() - info.delta.x, 200);
        if (newWidth !== width.get()) {
            width.set(newWidth);
            left.set(left.get() + info.delta.x);
        }
    }

    const handleTopLeftDrag = (event: any, info: any) => {
        event.stopPropagation();
        const newHeight = clamp(height.get() - info.delta.y, 200);
        if (newHeight !== height.get()) {
            height.set(newHeight);
            top.set(top.get() + info.delta.y);
        }

        const newWidth = clamp(width.get() - info.delta.x, 200);
        if (newWidth !== width.get()) {
            width.set(newWidth);
            left.set(left.get() + info.delta.x);
        }
    }

    const handleMaximizeClick = () => {
        const currentWindow = getWindow(id);

        if (currentWindow?.maximized) {
            width.set(800);
            height.set(600);
            left.set(0);
            top.set(0);
            x.set(0);
            y.set(0);
        } else {
            width.set(window.innerWidth);
            height.set(window.innerHeight);
            left.set(0);
            top.set(0);
            x.set(0);
            y.set(0);
        }

        updateWindow(id, {
            maximized: !currentWindow?.maximized
        });
    }

    const initializeWindow = () => {
        const currentWindow = getWindow(id);

        if (currentWindow?.maximized) {
            width.set(window.innerWidth);
            height.set(window.innerHeight);
            left.set(0);
            top.set(0);
            x.set(0);
            y.set(0);
        }
    }

    return {
        x,
        y,
        width,
        height,
        top,
        left,
        resizeBarWidth,
        resizeBarHeight,
        handleBottomDrag,
        handleLeftDrag,
        handleRightDrag,
        handleTopDrag,
        handleTopLeftDrag,
        handleTopRightDrag,
        handleBottomRightDrag,
        handleBottomLeftDrag,
        handleMaximizeClick,
        initializeWindow
    };
}