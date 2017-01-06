module.exports = {
    port: process.env.PORT || 1337,
    environment: process.env.NODE_ENV || 'development',
    hookTimeout: 30000 // 30 seconds
};
