export const closest = (goal: number, array: number[]) : number => array.reduce((previous, current) => Math.abs(current - goal) > Math.abs(previous - goal) ? previous : current);

export const closestFloor = (goal: number, array: number[]) : number => (
    array.reduce((previous, current) => {
        if (Math.abs(current - goal) > Math.abs(previous - goal) || current > goal) return previous;
        else return current;
    })
)

export const closestCeil = (goal: number, array: number[]) : number => (
    array.reduce((previous, current) => {
        if (Math.abs(current - goal) > Math.abs(previous - goal) || current < goal) return previous;
        else return current;
    })
)