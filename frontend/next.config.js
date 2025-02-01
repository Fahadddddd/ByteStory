const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  webpackDevMiddleware: (config) => {
    // Set up proxy during development
    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000,
    };
    return config;
  },
  async redirects() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*', // Forward API calls to Express backend
        permanent: false,
      },
    ];
  },
};
