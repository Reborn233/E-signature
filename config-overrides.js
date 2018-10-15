const rewireMobX = require('react-app-rewire-mobx');
const path = require('path');
const resolve = (dir) => path.join(__dirname, '.', dir);

/* config-overrides.js */
module.exports = function override(config, env) {
    config = rewireMobX(config, env);
    config.resolve.alias = {
        '@': resolve('src')
    };
    return config;
};