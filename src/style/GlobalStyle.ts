import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        color:white;
        margin: 0;
        background-color: ${props => props.theme['black']};
        padding-top: 4rem;
        -webkit-font-smoothing: antialiased !important;
        min-height: calc(100vh + 1rem);
        font-family: Helvetica, sans-serif;
    }
    input{
        outline: none;
    }
    .container {
        width: 100%;
        max-width: 70rem;
        margin: 0 auto;
    }
    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
        line-height: none;
    }
    a{
        text-decoration: none;
    }
    .accordion-button::after{
        content: none;
    }
    .normalButton{
        background-color: ${props => props.theme.green};
        color: ${props => props.theme.white};
        padding: 1rem;
        border-radius: 8px;
        display: flex;
        gap: 0.5rem;
        font-weight: bold;
    }
    .normalButton:hover{
        opacity: 0.7;
        color: ${props => props.theme.white};
    }
    .modal-lg{
        width: 20rem;
    }
    .modal-content{
        background-color: ${props => props.theme.gray};
        input{
            padding: 0.5rem;
            width: 100%;
            background-color: rgba(255,255,255,0.1);
            border: none;
            color: ${props => props.theme.white};
            border-radius: 8px;
        }
    }
    .modal-header, .modal-footer{
        border: none;
    }
    .btn-close{
        --bs-btn-close-color: ${props => props.theme.white};
    }

`;

export default GlobalStyle;