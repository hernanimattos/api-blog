module.exports = {
  apps: [{
    name: 'API',
    script: 'index.js',
    ignore_watch: ['node_modules', 'src'],
    watch: true,
    env: {
      watch: true,
      NODE_ENV: 'development',
    },
  }],
};
