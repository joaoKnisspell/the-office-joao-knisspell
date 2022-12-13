// components
import Banner from './components/banner/Banner';
import Form from './components/form/Form';
import Card from './components/card/Card';
import { employees } from './data/employees';
import { Titulo } from './components/titulo/Titulo';
import { Footer } from './components/footer/Footer';

// React
import { useState } from 'react';
import styled from 'styled-components';

const CardsContainer = styled.section`
  display: flex;
  /* flex-direction:column; */
  flex-wrap: wrap;
  justify-content:center;
  align-items: center;
  gap: 1em;
  margin: 2em 0 2em 0;
  @media screen and (min-width:1024px){
    gap:2em;
    margin:4em 5%;
  }
  @media screen and (min-width:1400px){
    gap:3em;
    margin:4em 10%;
  }
`

let idAcc = employees.length;
const idGenerator = () => {
  idAcc = idAcc + 1;
  return idAcc;
}

function App() {

  // states
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState();
  const [empregados, setEmpregados] = useState(employees);

  // functions
  const handleAddEmpregado = () => {
    const newEmpregado = {
      id:idGenerator(),
      nome:nome,
      cargo:cargo,
      imagem:imagem,
    }
    setEmpregados([newEmpregado, ...empregados])
   }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddEmpregado();

    setNome('');
    setCargo('');
    setImagem('');
  }

  const removeEmpregado = (id) => {
    const newArray = empregados.filter((empregado) => {
      return empregado.id !== id;
    })
    setEmpregados(newArray);
  }

  

  return (
    <div className="App">
      <Banner />
      <Form
      nome={nome}
      cargo={cargo}
      imagem={imagem}
      setNome={setNome}
      setCargo={setCargo}
      setImagem={setImagem}
      handleSubmit={handleSubmit}
      />
      <Titulo size="30px">Nossa equipe:</Titulo>
      <CardsContainer>
        {empregados.map((empregado) => (
          <Card key={empregado.id} id={empregado.id} nome={empregado.nome} cargo={empregado.cargo} imagem={empregado.imagem} removeEmpregado={removeEmpregado} />
        ))}
      </CardsContainer>
      <Footer><p>© Desenvolvido por João Knisspell</p></Footer>
    </div>
  );
}

export default App;
