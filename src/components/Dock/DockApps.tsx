import { Button, Typography, useTheme } from "@mui/material";
import { Reorder } from "framer-motion";
import { useAppsStore } from "../../stores/apps";
import { Stacks, useDockSettingsStore } from "../../stores/dockSettings";

export const DockApps = () => {

    const {
        apps,
        setApps,
        toggleWindowVisibility
    } = useAppsStore((store) => store);

    const dockSettings = useDockSettingsStore(store => store);
    const theme = useTheme();

    // const renderApps = () => {
    //     switch (dockSettings.stackMode) {
    //         case Stacks.AlwaysShowAll:
    //             return renderAlwaysShowAll();
    //         default:
    //             return renderAlwaysShowAll();
    //     }
    // }

    return (
        <Reorder.Group
            axis={"x"}
            values={apps}
            onReorder={setApps}
            style={{
                display: "flex",
                listStyle: "none",
                flex: 1
            }}
        >
            {apps.map((app) => (
                <Reorder.Item
                    key={app.id}
                    value={app}
                >
                    <Button
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
                </Reorder.Item>
            ))}
        </Reorder.Group>
    );
}