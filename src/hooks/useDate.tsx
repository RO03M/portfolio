import { useEffect, useState } from "react";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturnday"
];

const useDate = (intervalMs?: number) => {

    const [tick, setTick] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTick((prev) => !prev);
        }, intervalMs || 1000);

        return () => clearInterval(interval);
    },[]);

    const date = new Date(Date.now());

    return {
        date: date,
        padSeconds: String(date.getSeconds()).padStart(2, "0"),
        padMinutes: String(date.getMinutes()).padStart(2, "0"),
        padHours: String(date.getHours()).padStart(2, "0"),
        month: {
            name: months[date.getMonth()],
            padValue: String(date.getMonth() + 1).padStart(2, "0")
        },
        year: {
            longValue: date.getFullYear()
        },
        padMonthDay: String(date.getDate()).padStart(2, "0"),
        weekDay: weekdays[date.getDay()]
    };
}

export default useDate;