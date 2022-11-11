import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";

import { Image, LabelInput, Input} from './style'

import Container from '../../components/ContainerP'
import ContainerItens from "../../components/ContainerItens";
import Title from "../../components/TitleH1";
import Button from "../../components/Bnt";

import Logo from '../../assets/burger.png'



function App() {

    const history = useHistory()
    const [ users, setUsers] = useState([])
    const [ pedidos, setPedidos] = useState()
    const [ nome, setNome] = useState()

   function pedido(e){
    setPedidos(e.target.value)
   }

   function cliente(e){
    setNome(e.target.value)
   }

   async function addNewUser(){
    const {data: datas} = await axios.post('http://localhost:3000/users', {name:nome,pedido:pedidos})
    console.log(datas);
    history.push('/pedidos')
    // setUsers([...users,{id:Math.random(), pedido:pedidos, name:nome}])
   }

    return (
        <Container>
            <Image src={Logo} alt="Foto_logo" />
            <ContainerItens>
                <Title>Faça seu pedido!</Title>
                <LabelInput>Pedido</LabelInput>
                <Input onChange={pedido} placeholder="X-salada" />
                <LabelInput>Nome do Cliente</LabelInput>
                <Input onChange={cliente} placeholder="Steve Jobs" />
                <Button onClick={addNewUser}>Novo Pedido</Button>
            </ContainerItens>
        </Container>
    )
}

export default App