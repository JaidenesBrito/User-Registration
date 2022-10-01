import React, { useState, useRef, } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import People from '../../Assets/people.svg';
import Arrow from '../../Assets/arrow.svg';

import H1 from '../../Components/Title'
import ConteinerItens from '../../Components/conteinersItens' 
import Button from "../../Components/button"

import {
  Conteiner,
  Image,
  InputLabel,
  Input,

} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate('usuarios')

  }


  return (
    <Conteiner>
      <Image alt="logo-imagem" src={People} />
      <ConteinerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button to onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>



      </ConteinerItens>
    </Conteiner>
  )
}

export default App