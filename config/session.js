module.exports.session = {
    secret: 'b5703e716643dc34e3f7132f9786ab9d',
    adapter: 'connect-mongo',
    url: process.env.MONGODB_URI
};
