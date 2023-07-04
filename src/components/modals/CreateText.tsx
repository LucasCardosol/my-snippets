import { Button, Modal } from "react-bootstrap";
import { createTexts } from "../../axios/services/createText";
import { useState } from 'react'

export function CreateText(props: any) {

    const [title , setTitle] = useState('')

    function createText(e:any){
        if (title.length > 0){
            createTexts(props.idfolder , title)
        }
        else{
            window.alert('O nome não deve ser vazio')
        }
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
                    Adicionar Texto
                </Modal.Title>
            </Modal.Header>
            <form onSubmit={createText}>
                <Modal.Body>

                    <input 
                        placeholder="Digite o nome do texto" 
                        maxLength={50} 
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    >
                    </input>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} type="submit">Criar</Button>
                    <Button onClick={props.onHide}>Fechar</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}