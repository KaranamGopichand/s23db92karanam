var butterfly = require('../models/butterfly');
// List of all butterflys
exports.butterfly_list = async function(req, res) {
    try{
    thebutterflys = await butterfly.find();
    res.send(thebutterflys);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific butterfly.
exports.butterfly_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: butterfly detail: ' + req.params.id);
};
// Handle butterfly create on POST.
exports.butterfly_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: butterfly create POST');
};
// Handle butterfly delete form on DELETE.
exports.butterfly_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: butterfly delete DELETE ' + req.params.id);
};
// Handle butterfly update form on PUT.
exports.butterfly_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: butterfly update PUT' + req.params.id);
};
exports.butterfly_view_all_Page = async function(req, res) {
    try{
    thebutterflys = await butterfly.find();
    res.render('butterfly', { title: 'butterfly Search Results', results: thebutterflys });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.butterfly_create_post = async function(req, res) {
    console.log(req.body)
    let document = new butterfly();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"butterfly_type":"goat", "cost":12, "size":"large"}
    document.butterfly_color = req.body.butterfly_color;
    document.butterfly_breed = req.body.butterfly_breed;
    document.butterfly_price = req.body.butterfly_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }
  
// for a specific butterfly.
exports.butterfly_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await butterfly.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    exports.butterfly_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body
       ${JSON.stringify(req.body)}`)
        try {
        let toUpdate = await butterfly.findById( req.params.id)
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
    exports.butterfly_delete = async function(req, res) {
        console.log("delete " + req.params.id)
        try {
        result = await butterfly.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
        }
        }
        exports.butterfly_view_one_Page = async function(req, res) {
            console.log("single view for id " + req.query.id)
            try{
            result = await butterfly.findById( req.query.id)
            res.render('butterflydetail',
            { title: 'butterfly Detail', toShow: result });
            }
            catch(err){
            res.status(500)
            res.send(`{'error': '${err}'}`);
            }
            };
            exports.butterfly_create_Page = function(req, res) {
                console.log("create view")
                try{
                res.render('butterflycreate', { title: 'butterfly Create'});
                }
                catch(err){
                res.status(500)
                res.send(`{'error': '${err}'}`);
                }
                };
                exports.butterfly_update_Page = async function(req, res) {
                    console.log("update view for item "+req.query.id)
                    try{
                    let result = await butterfly.findById(req.query.id)
                    res.render('butterflyupdate', { title: 'butterfly Update', toShow: result });
                    }
                    catch(err){
                    res.status(500)
                    res.send(`{'error': '${err}'}`);
                    }
                   };
                   exports.butterfly_delete_Page = async function(req, res) {
                    console.log("Delete view for id " + req.query.id)
                    try{
                    result = await butterfly.findById(req.query.id)
                    res.render('butterflydelete', { title: 'butterfly Delete', toShow:
                    result });
                    }
                    catch(err){
                    res.status(500)
                    res.send(`{'error': '${err}'}`);
                    }
                    };
    