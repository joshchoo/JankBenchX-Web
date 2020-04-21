const faunadb = require('faunadb');
const { configs } = require('../_utils/configs');
const { resultsSchema } = require('../_utils/validator');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: configs.FAUNA_DB_SECRET_KEY,
});

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    try {
      // TODO: Return all data instead of paginated?
      const response = await client.query(
        q.Map(q.Paginate(q.Match(q.Index('all_benchmark_results'))), (ref) =>
          q.Get(ref)
        )
      );

      // TODO: Format data -> convert ts to proper timestamp
      const data = response.data;

      return res.status(200).json({ results: data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    let data;
    try {
      data = await resultsSchema.validate(req.body);
    } catch (error) {
      return res.status(400).json({ message: error.errors });
    }

    const { run_id } = data;
    try {
      await client.query(q.Get(q.Match(q.Index('results_by_runid'), run_id)));
      return res
        .status(400)
        .json({ message: 'Cannot upload duplicate results' });
    } catch (error) {
      // Do nothing
    }

    try {
      await client.query(
        q.Create(q.Collection('benchmark_results'), { data: data })
      );

      return res.status(201).json({ message: 'Results uploaded successfully' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
