const closest = (goal: number, array: number[]) : number => array.reduce((previous, current) => Math.abs(current - goal) > Math.abs(previous - goal) ? previous : current);
export default closest;