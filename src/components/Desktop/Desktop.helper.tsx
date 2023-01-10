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
    const minGridWidth = 150;
    const minGridHeight = 140;

    const gridWidth = window.innerWidth / Math.floor(window.innerWidth / minGridWidth);
    const gridHeight = window.innerHeight / Math.floor(window.innerHeight / minGridHeight);

    return {
        width: gridWidth,
        height: gridHeight
    };
}