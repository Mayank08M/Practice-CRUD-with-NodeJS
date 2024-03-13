const { Op } = require("sequelize")
const db = require("../../models")

module.exports = {
    create: async (data, file) => {
        return await db.users.create(data, file)
    },
    getAll: async () => {
        return await db.users.findAll()
    },
    update: async (data) => {
        return await db.users.update(data, { where: { id: { [Op.eq]: data.id } } })
    },
    getByEmail: async (email) => {
        return await db.users.findOne({ where: { email: { [Op.eq]: email } } })
    },
    getByID: async (id) => {
        return await db.users.findByPk(id)
    }
}