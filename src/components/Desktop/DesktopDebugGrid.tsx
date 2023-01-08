import { styled } from "@mui/system";

const Container = styled("div")({
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.1)"
});

const Cell = styled("div")({
   width: "10%",
   height: "10%",
   border: "1px solid black"
});

const DesktopDebugGrid = () => {
    return (
        <Container>
            {new Array(10).fill(null).map(x => new Array(10).fill(null).map(y => (
                <Cell/>
            )))}
        </Container>
    );
}


export default DesktopDebugGrid;