import { useEffect, useState } from "react";

interface Props {
    waitResizeEnd: boolean;
}

interface Size {
    width: number;
    height: number;
}

const useWindowSize = (props?: Props): Size => {
    const [windowSize, setWindowSize] = useState<Size>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const onResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener("resize", onResize);

        onResize();

        return () => window.removeEventListener("resize", onResize);
    }, []);

    return windowSize;
}

export default useWindowSize;