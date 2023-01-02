import { Button, Typography, useTheme } from "@mui/material";
import { useAppsStore } from "../../stores/apps";
import { Stacks, useDockSettingsStore } from "../../stores/dockSettings";

export const useRenderApps = () => {

    const apps = useAppsStore((store) => store.apps);
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