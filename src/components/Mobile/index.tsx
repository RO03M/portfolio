import { Box, Typography } from "@mui/material";

import MobileOffIcon from '@mui/icons-material/MobileOff';

const Mobile = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#1f1f1f",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: 3
            }}
        >
            <MobileOffIcon
                sx={{
                    fontSize: 300,
                    border: "10px solid white",
                    borderRadius: "100%"
                }}
            />
            <Typography
                fontSize={40}
                sx={{
                    padding: 5
                }}
            >
                Por motivos técnicos, esta aplicação só é possível ser acessada por meio um computador
            </Typography>
        </Box>
    );
}

export default Mobile;