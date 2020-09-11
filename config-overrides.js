var path = require('path');
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

module.exports = function(config, env) {
  return Object.assign(
    config,
    override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      }),
      // add an alias for "our" imports
      addWebpackAlias({
        '@imd/assets': path.resolve(__dirname, 'src/assets'),
        '@imd/components': path.resolve(__dirname, 'src/components'),
        '@imd/config': path.resolve(__dirname, 'src/config'),
        '@imd/containers': path.resolve(__dirname, 'src/containers'),
        '@imd/redux': path.resolve(__dirname, 'src/redux'),
        '@imd/lib': path.resolve(__dirname, 'src/library'),
        '@imd/ui': path.resolve(__dirname, 'src/UI'),
      })
    )(config, env)
  );
};
