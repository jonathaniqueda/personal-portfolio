/**
 * Email.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    connection: 'localMongoServer',
    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            required: true
        },
        subject: {
            type: 'string',
            required: false
        },
        msg: {
            type: 'text',
            required: true
        },
    }
};
