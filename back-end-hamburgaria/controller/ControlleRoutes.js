const uuid = require('uuid')
const users = []
const {Cliente} = require('../models')

class ControlleRouter {
    static async index(req, res) {
        
        try {
            const clientesPedidos = await Cliente.findAll()
            res.status(200).json(clientesPedidos)
        } catch (error) {
            
        }
        
    }


    static async user(req, res) {
       try {
        
        const clientes = await Cliente.create({
            nome: req.body.nome,
            pedido: req.body.pedido
        })

        res.status(200).json({
            data:clientes
        })

       } catch (error) {
        
       }
    }


    static atulizar(req, res) {

        const {id} = req.params
        const { name, pedido } = req.body
        const userUpdate = {id, name, pedido }
        const index = users.findIndex(user => user.id === id)

        if (index < 0) {
            return res.status(404).json({ "msg": "user not found" })
        }

        users[index] = userUpdate
        res.status(200).json(userUpdate)
    }


    static async deleta(req,res){
       try {

        const cliente = await Cliente.findByPk(req.params.id)
        await cliente.destroy()

        res.status(200).json({msg:"Usuario deletado"})

       } catch (error) {
        
       }
    }

}

module.exports = ControlleRouter