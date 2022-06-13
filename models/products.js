const fs = require('fs');
const path = require('path')

const root = require('../util/path');

module.exports = class Product {

    constructor(title) {
        this.title = title;
    }

    save() {
        const productionFile = path.join(
            root,
            'data',
            'products.json');

        const productArray = [];

        const title = this.title;

        fs.readFile(productionFile, (error, products) => {
            if (error) {
                console.log(`ERROR : ${error}`);
                return;
            }

            productArray.push(JSON.parse(products.toString()));
            for (const product of products) {
                console.log(product)
            }
        });
    };

    static fetchAll() {
        return [];
    }
}