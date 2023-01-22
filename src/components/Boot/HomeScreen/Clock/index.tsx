import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import useDate from "../../../../hooks/useDate";

interface Props {
    onClick: () => void;
}

const Clock = (props: Props) => {

    const {
        onClick
    } = props;

    const {
        padSeconds,
        padMinutes,
        padHours,
        month,
        weekDay,
        padMonthDay
    } = useDate();

    return (
        <motion.div
            initial={{
                y: -300
            }}
            animate={{
                y: 0
            }}
            exit={{
                y: -300
            }}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                color: "#fff",
                paddingTop: 100
            }}
            onClick={onClick}
        >
            <Typography
                fontWeight={700}
                fontSize={46}
            >
                {padHours}:{padMinutes}:{padSeconds}
            </Typography>
            <Typography
                fontSize={12}
                fontWeight={500}
            >
                {weekDay}, {month.name} {padMonthDay}
            </Typography>
        </motion.div>
    );
}

export default Clock;