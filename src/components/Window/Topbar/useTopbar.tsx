import { useAppsStore } from "../../../stores/apps";

export const useTopbar = () => {

    const closeWindow = useAppsStore((store) => store.closeWindow);

    const handleCloseClick = (appId: number) => {
        closeWindow(appId);
    }

    return {
        handleCloseClick
    };
}