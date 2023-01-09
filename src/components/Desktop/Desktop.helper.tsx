/**
 * @description populates an array of n length with de result of division of each of the n steps
 */
export const makeArrayStep = (value: number, totalSteps: number) : number[] => {
    const response: number[] = [];
    const step = value / totalSteps;

    for (let i = 0; i < totalSteps + 1; i++) {
        response.push(step * i);
    }

    return response;
}

export const getGridSize = () => {
    const minXGridCount = 10;
    const minYGridCount = 5;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const xGridCount = windowWidth / minXGridCount;
    const yGridCount = windowHeight / minYGridCount;

    return {
        width: Math.floor(xGridCount),
        height: Math.floor(yGridCount)
    };
}