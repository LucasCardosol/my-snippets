import axiosInstance from "../axiosInstance";

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export function createTexts(id:number, title:string ) {
    const data = {
        "title": title
    }
    axiosInstance.post(
        `/api/texts/create/${id}`,
        data,
        config
    )
        .then(response => {
            window.alert('Texto criado com sucesso')
        })
        .catch(error => {
            console.error(error);
        });
}