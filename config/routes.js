module.exports.routes = {
    'get /': 'HomeController.index',
    'post /contact': 'HomeController.contact',
    'get /portfolio/:shortcut': 'PortfolioController.index',
    '/login': 'AdminController.login',
};
