import styled from 'styled-components';

export const HomeStyle = styled.div`
    main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr)); /* Three equal-width columns */
        grid-gap: 3rem;
        padding: 0;
    }
    div{
        height: 8rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 5s;
        border: 2px solid transparent;
        border-radius: 8px;
        :hover{
            transform: scale(1.1);
            border: 3px solid ${props => props.theme.green};
            box-shadow: gray 0px 4px 12px;
        }
    }
    a{
        position: relative;
        display: inline-block;
        height: 100%;
        width: 12rem;
        min-width: 12rem;
        background-color: ${props => props.theme.gray};
        cursor: pointer;
        border-radius: 8px;
        transition: 0.2s;
        font-size: 1.5rem;
        color: ${props => props.theme.white};
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
    button{
        height: 100%;
        width: 100%;
        max-width: 12rem;
        transition: 0.2s;
        border-radius: 8px;
        color: ${props => props.theme.green};
        svg{
            transition: 0.2s;
            pointer-events: none;
        }
    }
`;