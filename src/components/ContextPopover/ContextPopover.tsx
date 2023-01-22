import { MenuItem, MenuList, Popover } from "@mui/material";

export const ContextPopover = () => {
    return (
        <Popover
            anchorReference={"anchorPosition"}
            anchorPosition={{ top: 0, left: 1090 }}
            open={true}
        >
            <MenuList>
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
            </MenuList>
        </Popover>
    );
}