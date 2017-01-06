/**
 * AdminController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: function(req, res) {
        if (req.method === 'POST') {
            //Processa o login
        }

        return res.view('admin/login/index', {
            layout: 'admin/layout.ejs'
        });
    },
};
