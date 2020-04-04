const Bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    async create(request, response) {
        const { name, password, email} = request.body;

        const encryptedPassword = Bcrypt.hashSync(password, 10);

        const user = new User({
            name: name,
            email: email,
            password: encryptedPassword,
        });
        
        try {
            const savedUser = await user.save();
            response.json(savedUser);
        } catch (error) {
            response.status(500).send(error);
        }
    }
}