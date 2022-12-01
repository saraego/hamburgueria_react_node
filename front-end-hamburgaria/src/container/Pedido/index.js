import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Image, Ul, Li, LabelInput } from "./style"
import ContainerP from "../../components/ContainerP"
import ContainerI from "../../components/ContainerItens"
import Title from "../../components/TitleH1"
import Button from "../../components/Bnt"


import Logo from "../../assets/burger-pedido.png"
import Trash from "../../assets/trash.svg"


function Pedido() {
    const [users, setUsers] = useState([])
    const history = useHistory()

    useEffect(()=>{
       async function usuarios(){
            const {data:newUsers }= await axios.get('http://localhost:3000')
            console.log(newUsers);
            setUsers(newUsers)
        }
        usuarios()
    }, [])

  async function deletar(userId){
        const data = await axios.delete('http://localhost:3000/users/'+userId)
        console.log(data);
        const novo = users.filter(user => user.id !== userId)
        setUsers(novo)
    }
    function goBack() {
        history.push('/')
    }
    return (
        <ContainerP>
            <Image src={Logo} alt="logo" />
            <ContainerI>
                <Title>Pedidos</Title>

                <Ul>
                    {users.map(user => (
                        <Li key={user.id}>
                            <div>
                                <p>{user.pedido}</p>
                                <LabelInput>{user.nome}</LabelInput>
                            </div>
                            <button onClick={()=>deletar(user.id)} ><img src={Trash} alt="lixo" /></button>
                        </Li>
                    ))}
                </Ul>

                <Button notIsRed={true} onClick={goBack}>Voltar</Button>
            </ContainerI>
        </ContainerP>
    )
}

export default Pedido