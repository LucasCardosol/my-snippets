import styled from 'styled-components';


export const FolderStyle = styled.div`
    header{
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        a{
            color: ${props => props.theme.white};
        }
        .buttons{
            button{
                color: ${props => props.theme.white};
            }
            .delete{
                :hover{
                    color: #dc3545;
                }
            }
            .create{
                :hover{
                    color: ${props => props.theme.green};
                }
            }  
        }
        
    }
    .accordion-item,
    .accordion-header {
        
        :focus{
            outline: none;
            box-shadow: none;
            background-color:none;
        } 
    }
    
    .accordion-button{
        border-radius: 8px;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
        font-family: Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1rem;
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.gray};
        display: flex;
        justify-content: space-between;
        ::after{
            content: none !important;
            display: none;
            background: none;
        }
    }
    .accordion-button:not(.collapsed){
        background-color: transparent;
        box-shadow: none;
    }
    .accordion-item {
        border: none;
        margin-bottom: 1rem;
        border-radius: 8px;
        background-color: ${props => props.theme.gray};
        
    }
    .dropdown-toggle {
        padding: 0;
        outline: 0.5rem transparent solid;
        border-radius: 15px;
        background-color: transparent;
        border: none;
        transition: 0.5s;
        :hover{
            border-radius: 15px;
            background-color: rgba(0,0,0,0.75);
            outline: 0.5rem rgba(0,0,0,0.75) solid;
        }
        :focus , :active{
            color: ${props => props.theme.green};
            background-color: rgba(0,0,0,0.75);
            outline: 0.5rem rgba(0,0,0,0.75) solid;
        }
    }
    .dropdown-item{
        button{
            display: flex;
        justify-content: left;
        gap: 1rem;
        }
       
    }
`;