const fs = require('fs');
const path = require('path')
const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(process.mainModule.filename,
            'data',
            'product.json'
            );
            fs.readFile(p,(err,fileContent)=>{
                let products = [];
               if(!err){
                products = JSON.parse(fileContent)
               }
               products.push(this)
            });
    }

    static fetchAll() {
        return products;
    }
}