module.exports.sendContactEmail = function(obj) {
    sails.hooks.email.send(
        "contact", {
            contactEmail: obj.email,
            contactName: obj.name,
            contactSubject: obj.subject,
            contactMsg: obj.msg,
        }, {
            to: "jonathaniqueda@me.com",
            subject: "[PORTOFOLIO] Nova Mensagem de Contato"
        },
        function(err) {
            console.log(err || "email sended.");
        }
    );
}
