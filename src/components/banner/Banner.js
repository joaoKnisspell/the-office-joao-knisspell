// img
import banner from './banner2.jpg';
import logo from './logo.png'

// React
import styled from 'styled-components';

// components
import { Titulo } from '../titulo/Titulo';
import { Subtitulo } from '../subtitulo/Subtitulo';


const Main = styled.main`
    height: 60vh;
    width: 100vw;
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    .fade{
        position: absolute;
        top: 0;
        left: 0;
        height:60vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .banner__container, img{
        text-align: center;
        z-index: 1;
        color: #ffffff;
        padding: 0 1.5em;
    }

    h1{
        margin-bottom: 0.2em;
    }

    img{
        width: 180px;
    }

    @media screen and (min-width: 1024px){
        height: 50vh;
        .fade{
            height:50vh;
        }
    }


`


const Banner = () => {
    return(
        <Main>
            <div className='fade' />
                <img src={logo} alt="Dunder Mifflin logo" />
                <div className="banner__container">
                    <Titulo size="21px">Bem vindos à Dunder Mifflin!</Titulo>
                    <Subtitulo size="18px">Melhor empresa de papel de toda Pensilvânia</Subtitulo>
                </div>
        </Main>
    )
}

export default Banner;