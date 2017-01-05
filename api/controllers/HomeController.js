/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function(req, res) {
        return res.view('homepage/index', {
            layout: 'layout',
            bodyClass: 'blue',
            title: 'Jonathan Iqueda - A Web Developer of Things'
        });
    },

    contact: function(req, res) {
        Contact.create(req.body.contact).exec(function(err, contact) {
            if (err) {
                return res.json(err.status, ResponseMessageService.modelErrorReturn(err, 'contact'));
            }

            if (contact) {
                MailerService.sendContactEmail(contact);
                return res.json(ResponseMessageService.pattern('success', '', {
                    sended: true,
                }));
            }
        });
    },
};
