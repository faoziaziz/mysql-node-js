'use strict';

module.exports = function(app) {
    var todoList = require('../controller/controller');
    var advCont = require('../controller/advCont');

    app.route('/')
        .get(todoList.index);

    app.route('/neiraAll')
        .get(todoList.neiraAll);

    app.route('/adv').get(todoList.testDate);
    app.route('/toDate').get(todoList.toDate);
    //app.route('/formiklan').get(todoList.formiklan);
    app.get('/formiklan', function(req, res){
        res.render('pages/formiklan');
    });

    //app.route('/api/iklanneira'.post(advCont.WriteToDb));
    app.post('/api/iklanneira', function(req, res){

        /*declare variable */
        var conten_iklan = req.body.conten_iklan;
        var counter_max = req.body.counter_max;
        var jumlah_hari = req.body.jumlah_hari;

        /* initition id for primary key */
        
        advCont.WriteToDb(conten_iklan, counter_max, jumlah_hari);

        console.log("ci "+conten_iklan+" cm : "+counter_max );
        res.send(conten_iklan+' halo '+counter_max);
    });



};  
