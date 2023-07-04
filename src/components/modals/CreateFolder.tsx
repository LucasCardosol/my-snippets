import { Button, Modal } from "react-bootstrap";
import { createFolder } from "../../axios/services/createFolder";
import { useState } from 'react'


export function CreateFolder(props: any) {
    
    const [name , setName] = useState('')

    function onCreateFolder(){
        createFolder(name)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title >
                    Adicionar Pasta
                </Modal.Title>
            </Modal.Header>
            <form onSubmit={onCreateFolder}>
                <Modal.Body>
                    <input 
                        placeholder="Digite o nome da pasta"
                        maxLength={50} 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} type="submit">Criar</Button>
                    <Button onClick={props.onHide}>Fechar</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}