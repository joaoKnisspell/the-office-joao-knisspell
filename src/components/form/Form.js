import styled from 'styled-components';
import { Subtitulo } from '../subtitulo/Subtitulo';

const FormCntainer = styled.form`
    text-align:center;
    margin: 2em 1.2em;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius:10px ;
    max-width:600px;
    box-sizing: border-box;
    padding:1.5em 1em;

    @media screen and (min-width:1024px){
      margin:4em 0;
    }

    label{
        text-align: start;
        display: flex;
        flex-direction: column;
        margin-top:1em;
        span{
            font-size: 18px;
        }
        input{
            margin-top: 0.5em;
            border: none;
            /* border-bottom: 2px solid gray; */
            padding: 1em ;
            background-color: transparent;
            outline: none;
            font-size: 16px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }
    }
    .inputBtn{
            margin-top: 1em;
            border: none;
            padding: 1em;
            background-color: #000;
            color:#ffffff;
            font-size: 16px;
            font-family: 'Lexend', sans-serif;
        }
`

const Form = ({ nome, cargo, imagem, setNome, setCargo, setImagem, handleSubmit }) => {

    return(
        <FormCntainer onSubmit={handleSubmit}>
        <Subtitulo size="20px">Cadastre-se para fazer parte da nossa equipe:</Subtitulo>
        <label>
          <span>Nome:</span>
          <input onChange={(event) => setNome(event.target.value)} type="text" value={nome} placeholder='Digite seu nome' required/>
        </label>

        <label>
          <span>Cargo:</span>
          <input onChange={(event) => setCargo(event.target.value)} type="text" value={cargo} placeholder='Digite sua função' required/>
        </label>

        <label>
          <span>Imagem:</span>
          <input onChange={(event) => setImagem(event.target.value)} type="text" value={imagem} placeholder='Digite a URL da imagem' required/>
        </label>

        <input className='inputBtn' type="submit" value="Cadastrar"/>
      </FormCntainer>
    )
}

export default Form;