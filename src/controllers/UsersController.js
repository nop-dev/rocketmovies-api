knex = require("../database/knex");
const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UsersController {
    async create(req, res) {
        const { name, email, password } = req.body;

        if(!name) {
            throw new AppError("O nome é obrigatório...")
        }

        const hashedPassword = await hash(password, 12)
        
        const createUser = await knex("users").insert({
            name : name,
            email : email,
            password : hashedPassword
        })
        
        res.status(201).json();
    }

    async update(req, res) {
        const { name, email, password, old_password } = res.body;
        const { id } = res.params;

        if(!user) {
            throw new AppError("Usuário não encontrado...");
        };
    }
}

module.exports = UsersController