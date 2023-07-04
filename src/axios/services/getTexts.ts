import axiosInstance from "../axiosInstance";

export interface typeListTexts {
    _id: number,
    title: string,
    content: string
}

export function getTexts(id: any, onSetListText: (arg: typeListTexts[]) => void) {

    axiosInstance.get(`/api/texts/${id}`)
        .then(response => {
            onSetListText(response.data)
        })
        .catch(error => {
            console.error(error);
        });
}