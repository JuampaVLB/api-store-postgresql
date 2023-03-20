import Express from "express";
import productsRoutes from './routes/products.routes.js';
import * as ErrorMiddleware from './middlewares/error.handler.js';
// Settings

const app = Express();

const PORT = process.env.PORT || 4000;

// Routes

app.use(Express.json());

app.use('/products', productsRoutes);

app.use(ErrorMiddleware.logErrors);
app.use(ErrorMiddleware.errorBoom);
app.use(ErrorMiddleware.errorHandler);

app.listen(PORT, () => {
    console.log("Server on PORT: " + PORT);
})
