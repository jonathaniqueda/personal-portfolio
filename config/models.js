module.exports.models = {
    connection: process.env.DB_CONNECTION || 'localDiskDb',
    migrate: 'safe'
};
