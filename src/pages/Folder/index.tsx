import { FolderStyle } from "./style";
import { ArrowLeft, Trash , Plus} from "phosphor-react"
import { Accordion } from 'react-bootstrap';
import { NavLink, useParams } from "react-router-dom";
import { NoteBlock } from "../../components/NoteBlock";
import { useState, useEffect } from 'react'
import { DeleteFolder } from "../../components/modals/DeleteFolder";
import { getTexts } from "../../axios/services/getTexts";
import { typeListTexts } from "../../axios/services/getTexts";
import { CreateText } from "../../components/modals/CreateText";

export function Folder() {
    const { id } = useParams() 
    const [modalDelete, setModalDelete] = useState(false);
    const [modalCreate, setModalCreate] = useState(false);
    const [listText, setListText] = useState<typeListTexts[]>([])

    useEffect(() => {
        getTexts(id, setListText)
    }, [])

    return (
        <FolderStyle>
            <main className="container">
                <header>
                    <NavLink to="/">
                        <ArrowLeft size={32} weight='bold' />
                    </NavLink>
                    <div className="buttons">
                    <button className="delete" title='Deletar' onClick={() => setModalDelete(true)}>
                        <Trash size={32} weight='bold' />
                    </button>
                    <button className="create" title='Criar texto' onClick={() => setModalCreate(true)}>
                        <Plus size={32} weight='bold' />
                    </button>
                    </div>
                </header>
                <Accordion>
                    {
                        listText.map(text =>
                            <NoteBlock key={`${text._id}${text.title}`} content={text.content} title={text.title} id={text._id} />
                        )
                    }
                </Accordion>
            </main>
            <DeleteFolder
                show={modalDelete}
                onHide={() => setModalDelete(false)}
                idfolder = {id}
            />
            <CreateText
                show={modalCreate}
                onHide={() => setModalCreate(false)}
                idfolder = {id}
            />
        </FolderStyle>
    )
}

