import axiosInstance from "../axiosInstance";

export interface typeListFolder {
    _id: number,
    name: string
}


export function getFolders(onSetListFolder: (arg: typeListFolder[]) => void) {
    axiosInstance.get('/api/folders')
        .then(response => {
            onSetListFolder(response.data)
        })
        .catch(error => {
            console.error(error);
        });
}