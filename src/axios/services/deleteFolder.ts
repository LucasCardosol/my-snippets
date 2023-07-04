import axiosInstance from "../axiosInstance";


export function deleteFolder(id: number) {
   

    axiosInstance.delete(
        `/api/folders/delete/${id}`,
    )
        .then(response => {
            window.alert('Pasta deletada com sucesso')
            window.location.href = "/"
        })
        .catch(error => {
            console.error(error);
        });
}