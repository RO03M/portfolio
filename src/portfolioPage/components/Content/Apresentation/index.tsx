import { Box, ButtonBase, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Apresentation = () => {

    const { t } = useTranslation("translation", { keyPrefix: "portfolio.content.apresentation" });

    return (
        <Box
            sx={{
                marginLeft: 30,
                marginRight: 30,
                color: "#fff",
                marginTop: 5
            }}
        >
            <Typography
                fontWeight={900}
            >
                {t("hi")}
            </Typography>
            <Typography
                component={"h1"}
                fontSize={85}
                fontWeight={900}
            >
                Gabriel Romera.
            </Typography>
            <Typography
                component={"h1"}
                fontSize={60}
                fontWeight={900}
            >
                {t("i-do")}
            </Typography>
            <Typography
                sx={{
                    width: "40vw"
                }}
                fontWeight={600}
            >
                {t("description")}
            </Typography>
            <ButtonBase>
                {t("checkout")}
            </ButtonBase>
        </Box>
    );
}

export default Apresentation;