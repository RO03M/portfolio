import { Paper } from "@mui/material";

interface Props {
    children: JSX.Element
}

const Content = (props: Props) => {

    const {
        children
    } = props;

    return (
        <Paper
            sx={{
                height: "calc(100% - 25px)",
                borderRadius: "0 0 4px 4px"
            }}
        >
            {children}
        </Paper>
    );
}

export default Content;