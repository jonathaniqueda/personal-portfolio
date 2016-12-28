/**
 * PortfolioControllerController
 *
 * @description :: Server-side logic for managing Portfoliocontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function(req, res) {
        var pageReq = req.param('shortcut');

        return res.view('portfolio/' + pageReq, {
            layout: 'layout',
            bodyClass: 'portfolio-single blue',
            title: 'Jonathan Iqueda - A Web Developer of Things'
        });
    },
};
