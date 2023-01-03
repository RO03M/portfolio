import { useAppsStore } from "../../../stores/apps";

export const useTopbar = () => {

    const {
        closeWindow,
        toggleWindowVisibility
    } = useAppsStore((store) => store);

    const handleCloseClick = (appId: number) => closeWindow(appId);

    const handleMinimizeClick = (appId: number) => toggleWindowVisibility(appId, true);

    return {
        handleCloseClick,
        handleMinimizeClick
    };
}