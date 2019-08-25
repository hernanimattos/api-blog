module.exports = {
  apps: [{
    name: 'API',
    script: 'index.js',
    ignore_watch: ['node_modules'],
    watch: ['./index.js'],
    env: {
      NODE_ENV: 'development',
    },
  }],
};
