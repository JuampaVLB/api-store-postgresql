import faker from 'faker';
import boom from '@hapi/boom';

class ProductsService {

    constructor() {
        this.products = [];
        this.generate();
    }

    generate () {
        for (let index = 0; index < 100; index++) {
            
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean()
            })
            
        }
    }

    async find() {
        return this.products;
    }

    async create(data) {

        if(data.name === undefined || data.price === undefined || data.image === undefined) {
            throw new Error('Data Invalid!');
        }

        const newProduct = {
            id: faker.datatype.uuid(),
            name: data.name,
            price: data.price,
            image: data.image
        }

        this.products.push(newProduct);

        return newProduct;

    }

    findOne(id) {

        const productFind = this.products.find(item => item.id === id);

        if(!productFind) throw boom.notFound('This Product Not Exits!');

        if(productFind.isBlock) throw boom.conflict('Product is bLock!'); 

        return productFind;
    }

    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
            if (index === -1) {
                throw boom.notFound('No Exits This Product!');
            }
        
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        
        return this.products[index];

    }

    async delete(id) {    
            const index = this.products.findIndex(item => item.id === id);
                if(index === -1) ('Error'); throw boom.notFound('No Exits This Product!');
            this.products.splice(index, 1);
            return { id }
    }

}

export default ProductsService