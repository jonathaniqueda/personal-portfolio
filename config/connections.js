/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

module.exports.connections = {
    localMongoServer: {
        adapter: 'sails-mongo',
        host: 'localhost',
        port: 27017,
        user: '', //optional
        password: '', //optional
        database: 'portfolio_iqueda' //optional
    },

    prodMongoServer: {
        adapter: 'sails-mongo',
        host: 'ds157298.mlab.com',
        port: 57298,
        user: 'heroku_5sd7h28g',
        password: '1ecmc5d9ht9lhnulnefkrcsi22',
        database: 'heroku_5sd7h28g'
    },
};
