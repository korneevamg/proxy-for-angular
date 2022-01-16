var defaultTarget = 'http://api.bitcoincharts.com/';
module.exports = [
  {
    context: ['/v1/**'],
    target: defaultTarget,
    changeOrigin: true,
  },
];
