import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import axios from "axios";

import Avatar from '../../Assets/avatar.svg';
import Arrow from '../../Assets/arrow.svg';
import Trash from '../../Assets/trash.svg';

import H1 from '../../Components/Title'
import ConteinerItens from '../../Components/conteinersItens'
import Button from '../../Components/button'

import {
  Conteiner,
  Image,
  User
} from "./styles";


function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const { data: novoUsuario } = await axios.get("http://localhost:3001/users/")

      setUsers(novoUsuario);
    }

    fetchUser()

  }, [])




  async function deleteUser(userId) {
    axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/")
  }



  return (
    <Conteiner>
      <Image alt="logo-imagem" src={Avatar} />
      <ConteinerItens isBlur = {true}>
        <H1>Usuários!</H1>

        <ul>
          {users.map((user) => (
            <User key={users.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}

        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>

      </ConteinerItens>
    </Conteiner>
  )
}

export default Users