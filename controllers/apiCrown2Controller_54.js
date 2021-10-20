const serviceCrown2Controller_54 = require('./serviceCrown2Controller_54')

exports.getCategories = (req, res) => {
    try {
        let results = await serviceCrown2Controller_54.getCategories();
        console.log('results', JSON.stringify(results));
    } catch (err) {
        console.log('crown2Controller getCategories', err)
    }
}