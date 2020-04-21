const dotenv = require('dotenv');
dotenv.config();

exports.configs = {
  FAUNA_DB_SECRET_KEY: process.env.FAUNA_DB_SECRET_KEY,
};
