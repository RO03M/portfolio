import { Box } from "@mui/material";
import { motion } from "framer-motion";

export enum ResizePoints {
    TopLeft = 0,
    Top = 1,
    TopRight = 2,
    Right = 3,
    BottomRight = 4,
    Bottom = 5,
    BottomLeft = 6,
    Left = 7,
}

interface IResizePoint {
    onClick?: {(corner: ResizePoints): void};
}

export const TopLeft = (props: IResizePoint) => {
    const {
        onClick = () => { },
    } = props;

    return (
        <Box
            onClick={() => onClick(ResizePoints.TopLeft)}
            id={"topLeftCorner"}
            sx={{
                position: "absolute",
                width: 5,
                height: 5,
                left: -2.5,
                top: -2.5,
                cursor: "nw-resize"
            }}
        />
    );
}

export const Top = (props: IResizePoint) => {
    const {
        onClick = () => { },
    } = props;

    return (
        <Box
            onClick={() => onClick(ResizePoints.Top)}
            id={"top"}
            sx={{
                position: "absolute",
                width: "100%",
                height: 5,
                top: -2.5,
                cursor: "n-resize",
                backgroundColor: "red"
            }}
        />
    );
}

export const TopRight = (props: IResizePoint) => {
    const {
        onClick = () => { },
    } = props;

    return (
        <Box
            onClick={() => onClick(ResizePoints.TopRight)}
            id={"topRightCorner"}
            sx={{
                position: "absolute",
                width: 5,
                height: 5,
                top: -2.5,
                right: -2.5,
                cursor: "ne-resize"
            }}
        />
    );
}

export const Right = (props: IResizePoint) => {
    const {
        onClick = () => { },
    } = props;

    return (
        <Box
            onClick={() => onClick(ResizePoints.Right)}
            id={"right"}
            sx={{
                position: "absolute",
                width: 5,
                height: "100%",
                right: -2.5,
                cursor: "w-resize",
                backgroundColor: "red"
            }}
        />
    );
}

export const BottomRight = (props: IResizePoint) => {
    const {
        onClick = () => { },
    } = props;
    
    return (
        <Box
            onClick={() => onClick(ResizePoints.BottomRight)}
            id={"bottomRightCorner"}
            sx={{
                position: "absolute",
                width: 5,
                height: 5,
                bottom: -2.5,
                right: -2.5,
                cursor: "nw-resize"
            }}
        />
    );
};

export const Bottom = (props: IResizePoint) => {
    const {
        onClick = () => { },
        // onDrag = () => {},
        // onDrag
    } = props;

    return (
        <Box
            component={motion.div}
            onClick={() => onClick(ResizePoints.Bottom)}
            id={"bottom"}
            sx={{
                position: "absolute",
                width: "100%",
                height: 5,
                bottom: -2.5,
                cursor: "n-resize",
                backgroundColor: "red"
            }}
        />
    );
};

export const BottomLeft = (props: IResizePoint) => {
    const {
        onClick = () => { },
    } = props;
    return (
        <Box
            onClick={() => onClick(ResizePoints.BottomLeft)}
            id={"bottomLeftCorner"}
            sx={{
                position: "absolute",
                width: 5,
                height: 5,
                bottom: -2.5,
                left: -2.5,
                cursor: "ne-resize"
            }}
        />
    );
};

export const Left = (props: IResizePoint) => {
    const {
        onClick = () => { },
    } = props;

    return (
        <Box
            onClick={() => onClick(ResizePoints.Left)}
            id={"left"}
            sx={{
                position: "absolute",
                width: 5,
                height: "100%",
                left: -2.5,
                cursor: "w-resize",
                backgroundColor: "red"
            }}
        />
    );
};