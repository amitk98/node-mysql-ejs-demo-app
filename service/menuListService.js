import { menuListModel } from '../model/menuListModel.js';
import moment from 'moment';

export class MenuService {

    static async menudetails(data, headers) {
           let  menulist = await menuListModel.productDetails(headers.user_name)
           return menulist;
    }

    static async menudetailsbyId(data, headers) {
        const productid = data.product_id.replaceAll(':','');
        let  item = await menuListModel.detailsbyId(productid)
        console.log(item)
        return item;
    }

    static async itemAddition(data, file) {
        let itemdata = {
            title : data.title,
            description : data.description,
            ispublished : 1,
            price : data.price,
            imageUrl : file.filename,
            submission_date : moment().format('YYYY-MM-DD'),
        }

        let item = await menuListModel.addItem(itemdata);
        return ("Item Added Successfully", item)
    }

    static async getAdminItemList(data, headers) {

        let item = await menuListModel.getAdminItem();
        return ("Item List Loaded", item)
    }

    static async updateAdminItem(data, headers) {
        let pid = data.productId;
        let itemdata = {
            title : data.title,
            description : data.description,
            ispublished : 1,
            price : data.price,
            imageUrl : data.imageUrl,
            submission_date : moment().format('YYYY-MM-DD'),
        }
            let itemUpdate = await menuListModel.updateAdminItem(itemdata, pid);
            return ("Item updated Successfully", itemUpdate)
    }

    static async deleteAdminItem(data, headers) {
        let productId = data.productId.replaceAll(':','');
        console.log(productId);
        let itemUpdate = await menuListModel.deleteAdminItem(productId);
        return ("Item updated Successfully", itemUpdate)
    }
}