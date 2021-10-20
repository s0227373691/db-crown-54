const Category_54 = require('../models/Category_54')

exports.getCategories = async (req, res) => {
    try {
        return await Category_54.fetchAll()
    } catch (err) {
        console.log('getCategories', err)
    }
}