import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

const MenuBar = () => {
    const { t } = useTranslation("translation", { keyPrefix: "portfolio.menu" });
    
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                padding: 2.5,
                userSelect: "none"
            }}
        >
            <Box
                sx={{
                    flex: 1
                }}
            >

            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    color: "#fff",
                    alignItems: "center",
                    "& > p:hover": {
                        color: grey[400]
                    }
                }}
            >
                <Typography>
                    {t("about")}
                </Typography>
                <Typography>
                    {t("experience")}
                </Typography>
                <Typography>
                    {t("projects")}
                </Typography>
                <Typography>
                    {t("contact")}
                </Typography>
                <Button
                    variant={"outlined"}
                >
                    {t("resume")}
                </Button>
            </Box>
        </Box>
    );
}

export default MenuBar;