module.exports.models = {
    connection: process.env.DB_CONNECTION || 'prodMongoServer',
    migrate: 'safe'
};
