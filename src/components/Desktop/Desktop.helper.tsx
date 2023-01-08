/**
 * @description populates an array of n length with de result of division of each of the n steps
 */
export const makeArrayStep = (value: number, totalSteps: number) : number[] => {
    const response: number[] = [];
    const step = value / totalSteps;

    for (let i = 1; i < totalSteps + 1; i++) {
        response.push(step * i);
    }

    return response;
}
