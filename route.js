import express from 'express';
import { adminMenuController } from './controllers/adminMenuController.js';
const router = express.Router();

router.get('/adminproductlist', adminMenuController.getAdminItem); 
router.get("/add-product", adminMenuController.getAddProduct);
router.post('/addproduct', adminMenuController.addItem);
router.get("/edit-product/:product_id", adminMenuController.getUpdateItem);
router.post('/edit-product', adminMenuController.updateAdminItem);
router.get('/delete-product', adminMenuController.deleteAdminItem);

export default router;