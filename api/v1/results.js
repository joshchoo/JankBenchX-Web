const faunadb = require('faunadb');
const { configs } = require('../_utils/configs');
const { resultsSchema } = require('../_utils/validator');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: configs.FAUNA_DB_SECRET_KEY,
});

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    let data;
    try {
      data = await resultsSchema.validate(req.body, {
        strict: false, // allow transformations to be applied
        stripUnknown: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.errors });
    }

    try {
      await client.query(q.Create(q.Collection('Result'), { data: data }));

      return res.status(201).json({ message: 'Results uploaded successfully' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
