import { Router } from 'express';
import * as ProductsController from '../controllers/products.controller.js';

const routes = Router();

routes
    .get('/', ProductsController.GetAllProducts)
    .get('/:id', ProductsController.GetProduct)
    .post('/', ProductsController.CreateProduct)
    .patch('/:id', ProductsController.UpdateProduct)
    .delete('/:id', ProductsController.DeleteProduct)

export default routes;