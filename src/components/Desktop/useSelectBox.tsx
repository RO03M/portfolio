import { useMotionValue } from "framer-motion";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
    x: number;
    y: number;
    width: number;
    height: number;
}

const SelectBox = (props: Props) => {

    const {
        x,
        y,
        width,
        height
    } = props;

    return (
        <motion.div
            style={{
                userSelect: "none",
                position: "absolute",
                backgroundColor: "orange"
            }}
            initial={{
                x,
                y
            }}
            animate={{
                width,
                height
            }}
        />
    );
}

export const useSelectBox = (ref: React.RefObject<Element> | undefined) => {

    const [show, setShow] = useState<boolean>(false);

    const initialX = useMotionValue(0);
    const initialY = useMotionValue(0);
    const width = useMotionValue(100);
    const height = useMotionValue(100);

    const start = (event: React.MouseEvent<HTMLElement>) => {
        setShow(true);
        initialX.set(event.clientX);
        initialY.set(event.clientY);

        if (ref !== undefined && ref.current !== null) {
            console.log(<motion.div
                initial={{
                    x: initialX.get(),
                    y: initialY.get()
                }}
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "red"
                }}
            />);
            
        }
    }

    const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        
    }

    const stop = () => {
        setShow(false);
    }

    return {
        start,
        stop,
        onMouseMove,
        component: show && (
            <SelectBox
                x={initialX.get()}
                y={initialY.get()}
                width={width.get()}
                height={height.get()}
            />
        )
    };
}