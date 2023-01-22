import { useAppsStore } from "../../../stores/apps";

export const useTopbar = () => {

    const {
        closeWindow,
        toggleWindowVisibility
    } = useAppsStore((store) => store);

    const handleCloseClick = (appId: string) => closeWindow(appId);

    const handleMinimizeClick = (appId: string) => toggleWindowVisibility(appId, true);

    return {
        handleCloseClick,
        handleMinimizeClick
    };
}