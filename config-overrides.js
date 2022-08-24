const utils = require('./utils');

const aliases = utils.getAliases();

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      ...aliases
    },
  };
return config;
};
