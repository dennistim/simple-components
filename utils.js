const path = require('path');

module.exports = {
  getAliases: () => {
    console.info('\x1b[33m%s\x1b[0m', 'checking aliases from tsconfig.paths.json');

    const aliases = {};
    const json = require('./tsconfig.paths.json');
    if (!json) {
      console.info('\x1b[41m', 'tsconfig.paths.json is empty or undefined');
      return aliases;
    }
  
    const paths = json.compilerOptions?.paths;
    if (!paths) {
      console.info('\x1b[41m','paths is is empty or undefined');
      return aliases;
    }
  
    for (let alias in paths) {
      const regExp = /[@\w]*/;
      const key = regExp.exec(alias);
      const value = path.resolve(__dirname, `src/${regExp.exec(paths[alias][0])}`);
  
      Object.assign(aliases, {[key]: value});
    }
  
    return aliases;
  }
};
