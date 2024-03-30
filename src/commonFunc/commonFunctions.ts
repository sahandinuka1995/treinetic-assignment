export const findObject = (array: any, value: any) => {
    return array.find((element: any) => element.id === value);
}