const serviceCrown2Controller_54 = require('./serviceCrown2Controller_54')

exports.getCategories = async (req, res) => {
    try {
        let results = await serviceCrown2Controller_54.getCategories();
        console.log('results', JSON.stringify(results));
        res.render('crown2_54', { data: results, title: 'Crown2_54', name: 'Elmer', id: '207410654' });

    } catch (err) {
        console.log('crown2_', err)
    }
}