const Bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    async create(request, response) {
        const { name: userName, password, email: userEmail } = request.body;

        const encryptedPassword = Bcrypt.hashSync(password, 10); //encripta o password

        const validation = await User.find({ email: request.body.email });

        if (validation.length > 0) {
            response.status(400).json({ message: 'Email já cadastrado.'});
        } else {
            try {
                const user = new User({
                    name: userName,
                    email: userEmail,
                    password: encryptedPassword,
                });

                const savedUser = await user.save();
                response.json(savedUser);
            } catch (error) {
                response.status(500).send(error);
            }
        }
    }
}