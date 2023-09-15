import promise from 'promise';
import connectionDB from '../config.js';

export class menuListModel {
    static async productDetails (data) {
        return new promise ((resolve, reject) => {
            let qry = `select * from necom.demo_tbl where ispublished= 1 order by submission_date desc`
            connectionDB.query(qry, (err,result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    static async detailsbyId (id) {
        return new promise ((resolve, reject) => {
            let qry = `select * from necom.demo_tbl where product_id =?`
            connectionDB.query(qry, id, (err,result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    static async addItem (data) {
        return new promise ((resolve, reject) => {
            let qry = `insert into necom.demo_tbl SET ?`
            connectionDB.query(qry, [data], (err,result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    static async getAdminItem () {
        return new promise ((resolve, reject) => {
            let qry = `select * from necom.demo_tbl where ispublished= 1 order by submission_date desc`
            connectionDB.query(qry, (err,result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    static async deleteAdminItem (data) {
        return new promise ((resolve, reject) => {
            let qry = `update necom.demo_tbl set ispublished= 0 where product_id =?`
            connectionDB.query(qry, data, (err,result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    static async updateAdminItem (data, id) {
        return new promise ((resolve, reject) => {
            let qry = `update necom.demo_tbl set ? where product_id = ?`
            connectionDB.query(qry, [data, id], (err,result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
}