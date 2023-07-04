import { Button, Modal } from "react-bootstrap";
import { deleteFolder } from "../../axios/services/deleteFolder";


export function DeleteFolder(props: any) {

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
                    Deseja deletar essa pasta?
                </Modal.Title>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {deleteFolder(props.idfolder);props.onHide()}}>Deletar</Button>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}