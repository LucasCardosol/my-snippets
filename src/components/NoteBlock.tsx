import ReactQuill from 'react-quill';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { NoteBlockStyle } from './style';
import { Pencil, Trash, Eye, PaperPlaneTilt } from 'phosphor-react';
import { Accordion } from 'react-bootstrap';
import { DeleteText } from './modals/DeleteText';
import { updateText } from '../axios/services/updateText';

interface NoteBlockType {
    content: string,
    title: string,
    id: number
}

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'code',
    'list',
    'bullet',
    'link',
    'image',
    'code-block',
];

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, false] }],
        [{ font: [] }],
        [{ color: [] }],
        ['bold', 'italic', 'underline', 'code'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        [{ 'code-block': { language: '' } }],
    ],
}

export function NoteBlock({ content, title, id }: NoteBlockType) {

    const [editorContent, setEditorContent] = useState(content)
    const [onlyReadMode, setOnlyReadMode] = useState(true)
    const [modalShow, setModalShow] = useState(false);

    const handleEditorChange = (mycontent: string) => {
        setEditorContent(mycontent);
    };

    function onEdit() {
        setOnlyReadMode(!onlyReadMode)
    }

    function onUpdateText() {
        updateText(id, editorContent)
    }

    return (

        <Accordion.Item eventKey={`${id}`}>

            <Accordion.Header>
                {title}

            </Accordion.Header>
            <Accordion.Body>

                <NoteBlockStyle readOnly={onlyReadMode}>
                    <form onSubmit={onUpdateText}>
                        <ReactQuill

                            placeholder="Compose your text..."
                            modules={modules}
                            formats={formats}
                            value={editorContent}
                            theme="snow"
                            onChange={handleEditorChange}
                            readOnly={onlyReadMode}
                        // Override code block rendering
                        />

                        <div className='buttons'>
                            <button className='normalButton' type='button' onClick={() => setModalShow(true)}>
                                <Trash size={24} weight='bold' />
                                Deletar
                            </button>

                            <button onClick={onEdit} className='normalButton' type='button'>
                                {onlyReadMode ? <><Pencil size={24} weight='bold' />{'Editar'}</> : <><Eye size={24} weight='bold' />{'Ler apenas'}</>}
                            </button>
                            <button className='normalButton' type='submit'>
                                <PaperPlaneTilt size={24} weight='bold' />Enviar
                            </button>
                        </div>
                    </form>
                </NoteBlockStyle>
            </Accordion.Body>
            <DeleteText
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={id}
            />
        </Accordion.Item>

    )
}

