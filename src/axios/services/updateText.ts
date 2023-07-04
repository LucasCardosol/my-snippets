import axiosInstance from "../axiosInstance";

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export function updateText(id: number, content: string) {
    const data = {
        "content": content
    }
    axiosInstance.put(
        `/api/texts/update/${id}`,
        data,
        config
    )
        .then(response => {

            window.alert('Texto editado com sucesso')
        })
        .catch(error => {
            console.error(error);
        });
}