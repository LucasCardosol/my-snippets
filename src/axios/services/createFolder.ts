import axiosInstance from "../axiosInstance";

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export function createFolder(name:string ) {
    const data = {
        "name": name
    }
    axiosInstance.post(
        `/api/folders/create/`,
        data,
        config
    )
        .then(response => {
            window.alert('Pasta criada com sucesso')
        })
        .catch(error => {
            console.error(error);
        });
}