import { useOSStore } from "../../../stores";

export const useTopbar = () => {

    const closeWindow = useOSStore((store) => store.closeWindow);

    const handleCloseClick = (windowId: number) => {
        closeWindow(windowId);
    }

    return {
        handleCloseClick
    };
}