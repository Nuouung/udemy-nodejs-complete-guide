const Product = require('../models/products');

module.exports.getAddProduct = (request, response, next) => {
    response.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

module.exports.postAddProduct = (request, response) => {
    const product = new Product(request.body.title);
    product.save();

    response.redirect('/');
}

module.exports.getProducts = (request, response) => {

    response.render('shop', {
        prods: Product.fetchAll(),
        docTitle: 'shop',
    });
}