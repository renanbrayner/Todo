const Bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    async create(request, response) {
        try {
            const user = await User.findOne({ name: request.body.name }).exec();
            if(!user) {
                return response.status(400).send({ message: "O usuário não existe" });
            }
            if(!Bcrypt.compareSync(request.body.password, user.password)) {
                return response.status(400).send({ message: "A senha é invalida" });
            }
            response.send({ id: user._id });
        } catch (error) {
            response.status(500).send(error);
        }
    }
}