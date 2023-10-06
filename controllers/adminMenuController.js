import { MenuService } from '../service/menuListService.js';

export class adminMenuController {

    static async addItem (req, res, next) {
        try {
            const obj = JSON.parse(JSON.stringify(req.body));
            let response= await MenuService.itemAddition(obj, req.file);
            if(response) {
                res.redirect("/adminproductlist");
            } else {
                res.status(500).json({status: 500, message: "Internal Server Error"});
            }
        } catch(error) {
            next(error)
        }
    }

    static async getAdminItem (req, res, next) {
        try {
            let response= await MenuService.getAdminItemList(req.body, req.headers);
            console.log(response)
            if(response) {
                res.render("admin/products", {
                    prods: response,
                    pageTitle: "Products",
                    path: "/admin/products",
                  });
            } else {
                res.status(500).json({status: 500, message: "Bad Request"});
            }
        } catch(error) {
            next(error)
        }
    }

    static async updateAdminItem (req, res, next) {
        try {
            const obj = JSON.parse(JSON.stringify(req.body));
            console.log(obj)
            let response= await MenuService.updateAdminItem(obj, req.headers);
            if(response) {
                res.redirect("/adminproductlist");
            } else {
                res.status(500).json({status: 500, message: "Bad Request"});
            }
        } catch(error) {
            next(error)
        }
    }

    static async getAddProduct (req, res, next) {
        res.render("admin/add-product", {
            pageTitle: "Add Product",
            path: "/admin/add-product",
            editing: false,
            hasError: false,
          });
    }

    static async getUpdateItem (req, res, next) {
        try {
            let response= await MenuService.menudetailsbyId(req.params, req.headers);
            console.log(response)
            if(response) {
                res.render("admin/edit-product", {
                    pageTitle : "Edit Product",
                    editing: true,
                    product: response,
                    path: "/admin/edit-product",
                    hasError: false,
                  });
            } else {
                res.status(500).json({status: 500, message: "Bad Request"});
            }
        } catch(error) {
            next(error)
        }
    }

    static async deleteAdminItem (req, res, next) {
        try {
            let response= await MenuService.deleteAdminItem(req.query, req.headers);
            if(response) {
                res.redirect("/adminproductlist");
            } else {
                res.status(500).json({status: 500, message: "Bad Request"});
            }
        } catch(error) {
            next(error)
        }
    }
}