const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email
            }
        });

        if (!user) {
            return res.status(401).send({ message: 'User not found' });
        }

        if (!await bcrypt.compare(password, user.password_hash)) {
            return res.status(401).send({ message: 'Incorrect password' });
        }

        const token = jwt.sign({ id: user.id }, 'ushduiahyidgw3d87i');

        return res.status(200).json({ user, token });
    }
}

module.exports = new SessionController;