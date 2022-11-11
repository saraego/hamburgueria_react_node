const uuid = require('uuid')
const users = []

class ControlleRouter {
    static index(req, res) {
        res.json(users)
    }


    static user(req, res) {
        const { name, pedido } = req.body
        const novoUser = { id: uuid.v4(), name, pedido }
        users.push(novoUser)

        res.status(201).json(novoUser)
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


    static deleta(req,res){
        const {id} = req.params

        const index = users.findIndex(user=> user.id === id)

        if(index < 0){
            return res.status(404).json({ "msg": "user not found" })
        }

        users.splice(index,1)
        res.status(200).send("deletado")
    }

}

module.exports = ControlleRouter