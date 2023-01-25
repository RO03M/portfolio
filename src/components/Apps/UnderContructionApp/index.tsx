import { Box } from "@mui/material";

import underConstructionImage from "../../../assets/images/under_construction.svg";

const UnderConstructionApp = () => {

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 10
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${underConstructionImage})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: 500,
                    height: 300
                }}
            />
            <h1>Em construção</h1>
        </Box>
    );
}

export default UnderConstructionApp;