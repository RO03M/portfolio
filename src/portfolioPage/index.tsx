import { Box } from "@mui/material";
import { blue, indigo } from "@mui/material/colors";
import Content from "./components/Content";
import MenuBar from "./components/Menu";

const PortfolioPage = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100%",
                backgroundColor: indigo[900]
            }}
        >
            <MenuBar/>
            <Content/>
        </Box>
    );
}

export default PortfolioPage;