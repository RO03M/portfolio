import { useState } from "react";
import { clamp } from "../../helpers/clamp";

export const useWindow = () => {

    const [height, setHeight] = useState<number>(200);
    const [width, setWidth] = useState<number>(200);
    const [top, setTop] = useState<number>(0);
    const [left, setLeft] = useState<number>(0);
    const resizeBarWidth = 10;
    const resizeBarHeight = 10;
    
    //TODO remove clamp as limiter, or check before changing top and left
    const handleBottomDrag = (event: any, info: any) => {
        setHeight(clamp(height + info.delta.y, 200));
    }

    const handleRightDrag = (event: any, info: any) => {
        setWidth(clamp(width + info.delta.x, 200));
    }

    const handleLeftDrag = (event: any, info: any) => {
        setWidth(clamp(width - info.delta.x, 200));
        setLeft(left + info.delta.x);
    }

    const handleTopDrag = (event: any, info: any) => {
        event.stopPropagation();
        setHeight(clamp(height - info.delta.y, 200));
        setTop(top + info.delta.y);
    }

    const handleTopLeftDrag = (event: any, info: any) => {
        event.stopPropagation();
        setHeight(clamp(height - info.delta.y, 200));
        setTop(top + info.delta.y);
        setWidth(clamp(width - info.delta.x, 200));
        setLeft(left + info.delta.x);
    }

    const handleTopRightDrag = (event: any, info: any) => {
        event.stopPropagation();
        setHeight(clamp(height - info.delta.y, 200));
        setTop(top + info.delta.y);
        setWidth(clamp(width + info.delta.x, 200));
    }

    const handleBottomRightDrag = (event: any, info: any) => {
        event.stopPropagation();
        setWidth(clamp(width + info.delta.x, 200));
        setHeight(clamp(height + info.delta.y, 200));
    }

    const handleBottomLeftDrag = (event: any, info: any) => {
        event.stopPropagation();
        setWidth(clamp(width - info.delta.x, 200));
        setLeft(left + info.delta.x);
        setHeight(clamp(height + info.delta.y, 200));
    }

    return {
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
    };
}