import { Avatar, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import { useUserStore } from "../../../../stores/user";

interface Props {
    onSignIn: () => void;
}

const SignIn = (props: Props) => {

    const {
        onSignIn
    } = props;

    const user = useUserStore((user) => user);

    useHotkeys("enter", onSignIn);

    return (
        <motion.div
            initial={{
                y: 100,
                opacity: .4
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            exit={{
                y: "70vh",
                opacity: 0
            }}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30vh"
            }}
        >
            <Avatar
                sx={{
                    width: 150,
                    height: 150,
                    marginBottom: 4
                }}
            />
            <Typography
                fontSize={24}
                marginBottom={2}
                color={"#fff"}
                fontWeight={700}
            >
                {user.name}
            </Typography>
            <Button
                variant={"outlined"}
                disableRipple
                onClick={onSignIn}
                sx={{
                    width: 150,
                    textTransform: "capitalize"
                }}
            >
                Entrar
            </Button>
        </motion.div>
    );
}

export default SignIn;