module.exports = {
  apps : [{
    name: 'API',
    script: './dist/index.js',
    ignore_watch: ['node_modules', 'src'],
    watch: true,
    env: {
      NODE_ENV: 'development',
    },
  }],
};
