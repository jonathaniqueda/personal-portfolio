/**
 * Email.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
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
            required: true
        },
        msg: {
            type: 'text',
            required: true
        },
    },
    validationMessages: {
        name: {
            required: 'Você precisa digitar um nome válido :-('
        },
        email: {
            required: 'Você precisa digitar um e-mail válido :-('
        },
        subject: {
            required: 'Você precisa digitar um assunto válido :-('
        },
        msg: {
            required: 'Você precisa digitar uma mensagem válida :-('
        },
    }
};
