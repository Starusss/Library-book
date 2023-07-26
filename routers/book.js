import express, { Router } from 'express'
import bookController from '../controllers/bookController.js'

const router = express.Router();

router.post('/addProduct', bookController.addProduct)

router.get('/product', bookController.getProduct)

router.get('/productDetails/:id', bookController.getProductDetails)

router.get('/adminProduct', bookController.getAdminProduct)

router.put('/updateProduct/:id', bookController.updateProduct)

router.delete('/adminProduct/:id', bookController.deleteProduct)

router.get('/search/:keyword', bookController.getProductLike)

export default router;
