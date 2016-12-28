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
            title: 'Jonathan Iqueda - Desenvolvedor "The Mystical" Web'
        });
    },

    contact: function(req, res) {
        var email = Email.create(req.body).exec(function(err, records) {
            if (err) {
                console.log(err.Errors);
                // return res.serverError(ResponseMessageService.modelErrorReturn(err));
            }

            // sails.log('Record\'s id is:', records.id);
        });

        return ResponseMessageService.pattern('success', '', {
            sended: true,
        });
    },
};
