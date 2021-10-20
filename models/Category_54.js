const db = require('../utils/database')

const Category_54 = class Category_54 {
    constructor(id, name, size, remote_url, local_url, link_url) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.link_url = link_url;
    }

    static async fetchAll() {
        try {
            let results = await db.query(`SELECT * FROM category_54`);
            return results.rows;
        } catch (e) {
            console.log(`Error ${e}`)
        }
    }
}

// const test = async () => {
//     let results = await Category_54.fetchAll();
//     console.log('results', JSON.stringify(results))
// }
// test()
module.exports = Category_54