import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';

const CardContainer = styled.div`
    position: relative;
    /* margin:0 auto 2em auto; */
    max-width: 230px;
    padding: 1em;
    box-sizing: border-box;
    text-align: center;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: .4s;
    
    /* :hover{
        transform: scale(1.1);
    } */
    

    .icon{
        font-size: 25px;
        color: red;
        transition: .4s;
    }
    
    img{
        width: 200px;
        height: 200px;
    }
    p{
        margin:0.5em 0;
        font-weight: bold;
    }
    h3{
        text-transform: uppercase;
    }
    .nameAndIcon{
        display: flex;
        justify-content:center;
        align-items: center;
        gap:0.2em;
        
        button{
            border: none;
            background: none;
            margin-top:4px ;
            padding: 0;
            cursor:pointer;
        }
    }
`

const Card = ({ nome , cargo , imagem, id, removeEmpregado }) => {
    return(
        <>
        <CardContainer>
            {/* <TiDelete className='icon' /> */}
            <img src={imagem} alt="foto do empregado" />
            <p>{cargo}</p>
            <div className='nameAndIcon'>
                <h3>{nome}</h3>
                <button onClick={() => removeEmpregado(id)}><TiDelete className='icon' /></button>
            </div>
            
        </CardContainer>
        </>
    )
}
export default Card;