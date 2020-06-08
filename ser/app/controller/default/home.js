'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller {

    async index() {
        //获取用户表的数据

        let result = await this.app.mysql.get("article", {})
        console.log(result)
        this.ctx.body = result
    }
    // async getArticleList() {

    //     let sql='select * from article where id' = '哈哈1';
    //     const results = await this.app.mysql.query(sql)
    //     console.log(results)
    //     this.ctx.body = {
    //         data: results
    //     }
    // }
    async getArticleList() {

        // let sql = 'SELECT article.id as id,' +
        //     'article.title as title,' +
        //     'article.introduce as introduce,' +
        //     'article.addTime as addTime,' +
        //     'article.view_count as view_count ,' +
        //     '.type.typeName as typeName ' +
        //     'FROM article LEFT JOIN type ON article.type_id = type.Id'
        let sql = 'SELECT * FROM article ORDER BY id ASC'
        const results = await this.app.mysql.query(sql)
        console.log(results)
        this.ctx.body = {
            data: results
        }
    }
}

module.exports = HomeController