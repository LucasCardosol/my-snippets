import styled from 'styled-components';

interface readOnlyType{
    readOnly: boolean;
}

export const NoteBlockStyle = styled.div<readOnlyType>`
.quill {
        font-family: Helvetica, sans-serif !important;
        color: ${props => props.theme.white} !important;
        background-color: ${props => props.theme.lightGray};
        border-radius: 8px;
        border: 1px solid ${props => props.readOnly ? 'transparent' : props.theme.white};
    }
    .ql-toolbar {
        display: ${props => !props.readOnly ? 'block' : 'none'};
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border: none !important;
        border-color: transparent;
        background-color: ${props => props.theme.green};
    }
    .ql-container {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        border: none !important;
        border-color: transparent;
    }
    .ql-editor .ql-blank::before {
        color: ${props => props.theme.white};
    }
    .buttons{
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
    }
    
`;