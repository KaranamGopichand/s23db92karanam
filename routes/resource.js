var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var butterfly_controller = require('../controllers/butterfly');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// butterfly ROUTES ///
// POST request for creating a butterfly.
router.post('/butterflys', butterfly_controller.butterfly_create_post);
// DELETE request to delete butterfly.
router.delete('/butterflys/:id', butterfly_controller.butterfly_delete);
// PUT request to update butterfly.
router.put('/butterflys/:id', butterfly_controller.butterfly_update_put);
// GET request for one butterfly.
router.get('/butterflys/:id', butterfly_controller.butterfly_detail);
// GET request for list of all butterfly items.
router.get('/butterflys', butterfly_controller.butterfly_list);
module.exports = router;
//Handle Costume update form on PUT.
exports.costume_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Costume.findById( req.params.id)
// Do updates of properties
if(req.body.butterfly_color)
toUpdate.butterfly_color = req.body.butterfly_color;
if(req.body.butterfly_breed) toUpdate.butterfly_breed = req.body.butterfly_breed;
if(req.body.butterfly_price) toUpdate.butterfly_price = req.body.butterfly_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};