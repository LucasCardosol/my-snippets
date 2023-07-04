import axiosInstance from "../axiosInstance";

export function deleteText(id: number) {
    axiosInstance.delete(
        `/api/texts/delete/${id}`,
    )
        .then(response => {
            window.alert('Texto deletado com sucesso')
            location.reload()
        })
        .catch(error => {
            console.error(error);
        });
}