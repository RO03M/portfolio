import { Button, Typography, useTheme } from "@mui/material";
import { useAppsStore } from "../../stores/apps";
import { Stacks, useDockSettingsStore } from "../../stores/dockSettings";

export const useRenderApps = () => {

    const {
        apps,
        toggleWindowVisibility
    } = useAppsStore((store) => store);
    const dockSettings = useDockSettingsStore(store => store);
    const theme = useTheme();

    const renderApps = () => {
        switch (dockSettings.stackMode) {
            case Stacks.AlwaysShowAll:
                return renderAlwaysShowAll();
            default:
                return renderAlwaysShowAll();
        }
    }

    const renderAlwaysShowAll = () => apps.map((app) => (
        <Button
            key={app.id}
            color={"primary"}
            onClick={() => toggleWindowVisibility(app.id)}
            sx={{
                textTransform: "none"
            }}
        >
            <Typography
                sx={{
                    color: theme.palette.text.primary
                }}
            >
                {app.title}
            </Typography>
        </Button>
    ));

    return {
        renderApps
    };
}