module.exports.sendContactEmail = function(obj) {
    var api_key = 'key-9f71eb4a9be959512eb29c37e1f1ba41';
    var domain = 'jonathaniqueda.com.br';

    var mailgun = require('mailgun-js')({
        apiKey: api_key,
        domain: domain
    });

    var htmlEmail = '<p>Jonathan, chegou uma nova msg de contato:</p><p>Nome: ' + obj.name + '</p><p>E-mail: ' + obj.email + '</p><p>Assunto: ' + obj.subject + '</p><p>Msg: ' + obj.msg + '</p>';

    var data = {
        from: obj.name + '<' + obj.email + '>',
        to: 'jonathaniqueda@me.com',
        subject: obj.subject,
        html: htmlEmail
    };

    mailgun.messages().send(data, function(error, body) {
        console.log(body);
    });
}
