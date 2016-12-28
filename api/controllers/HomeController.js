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
};