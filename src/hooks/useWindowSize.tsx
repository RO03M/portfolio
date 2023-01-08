import { useEffect, useState } from "react";

interface Size {
    width: number | undefined;
    height: number | undefined;
}

const useWindowSize = (): Size => {
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined
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