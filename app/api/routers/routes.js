'use strict';
var response = require('./res');

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
        var iklantype = req.body.iklantype;
        var tanggal_kadaluarsa = req.body.ex_date;
        var flag = req.body.flag;
        var cpuid = req.body.cpuid;
        var memberid = req.body.memberid;
        var padTeks = req.body.padTeks;
        /* initition id for primary key */
        
        advCont.WriteToDb(conten_iklan, iklantype, tanggal_kadaluarsa, flag, cpuid, memberid, padTeks);

        response.mantaps(0, res);

    });

    app.post('/api/iklanneira2', function(req, res){

        /*declare variable */
        var conten_iklan = req.body.conten_iklan;
        var iklantype = req.body.iklantype;
        var tanggal_kadaluarsa = req.body.ex_date;
        var flag = req.body.flag;
        var cpuid = req.body.cpuid;
        var memberid = req.body.memberid;
        var padTeks = req.body.padTeks;

        /* initition id for primary key */
        
        advCont.WriteToDb2(conten_iklan, iklantype, tanggal_kadaluarsa, flag, cpuid, memberid, padTeks);
        response.mantaps(0, res);

    });



};  
