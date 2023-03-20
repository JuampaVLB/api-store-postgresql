// Imports

import ProductsService from '../services/products.service.js'

const service = new ProductsService();

// Get All Products

export const GetAllProducts = async (req, res, next) => {
    try {

        const products = await service.find();

        res.status(200).json({ message: 'Get All Products', products });    
    } catch (error) {
        next(error);
    }
}

// Get Product

export const GetProduct = async (req, res, next) => {
    try {

        const { id } = req.params;

        const product = await service.findOne(id);

        res.status(200).json({ message: 'Get Product', product });  

    } catch (error) {
        next(error);
    }
}

// Create Product

export const CreateProduct = async (req, res, next) => {
    try {

        const body = req.body;

        const newProduct = await service.create(body);

        res.status(200).json({ message: 'Create Product', newProduct});    
    } catch (error) {
        next(error);
    }
}

// Update Product

export const UpdateProduct = async (req, res, next) => {
    try {

        const { id } = req.params;

        const body = req.body;

        const updateProduct = await service.update(id, body);

        res.status(200).json({ message: 'Update Product', updateProduct}); 
           
    } catch (error) {
        next(error);
    }
}

// Delete Product

export const DeleteProduct = async (req, res, next) => {
    try {

        const { id } = req.params;

        const DeleteProduct = await service.delete(id);

        res.status(200).json({ message: 'Delete product', id });    
    } catch (error) {
        next(error);
    }
}


