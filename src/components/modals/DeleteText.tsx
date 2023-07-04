import { Button, Modal } from "react-bootstrap";

import { deleteText } from "../../axios/services/deleteText";


export function DeleteText(props: any) {

    return (
        <Modal
           
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                
            </Modal.Header>
            <Modal.Body>
                <Modal.Title >
                    Tem certeza de que deseja deletar o texto
                    atual?
                </Modal.Title>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {deleteText(props.id),props.onHide}}>Deletar</Button>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}