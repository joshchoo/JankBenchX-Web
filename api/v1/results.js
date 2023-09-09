const faunadb = require('faunadb');
const { configs } = require('../_utils/configs');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    return res.status(201).json({ message: 'Results uploaded successfully' });
  }
};
