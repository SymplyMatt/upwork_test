// const path = require('path')

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//    webpack5: true,
//  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Important: return the modified config

//    config = {...config, infrastructureLogging: {
//      // appendOnly: true,
//      level: 'verbose',
//    },
//    plugins: [
//      (compiler) => {
//        const logger = compiler.getInfrastructureLogger('MyPlugin');
//        logger.status('first output'); // this line won't be overridden with `appendOnly` enabled
//        logger.status('second output');
//      },
//     ],}

//     return config
//   },
//  }
// next.config.js

module.exports = {
    distDir: 'htdocs/redautorent.ee/.next', // Set the desired output directory
    // ...other configurations
};
  