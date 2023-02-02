import { MenuItem, MenuList, Popover } from "@mui/material";

interface Props {
    open: boolean;
    x: number;
    y: number;
}

const ContextPopover = (props: Props) => {

    const {
        open,
        x,
        y
    } = props;

    return (
        <Popover
            anchorReference={"anchorPosition"}
            anchorPosition={{
                top: y,
                left: x
            }}
            open={open}
        >
            <MenuList>
                <MenuItem>teste</MenuItem>
            </MenuList>
        </Popover>
    );
}

export default ContextPopover;