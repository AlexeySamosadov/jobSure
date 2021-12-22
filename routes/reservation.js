const {Router} = require('express');
const router = Router();
const Course = require('../models/course')


router.get('/', (req, res)=>{
   console.log('req', req);
    res.render('reservation', {
       title: "Записаться на консультацию",
       isAdd: true
    })
 })

 router.post('/', async (req, res)=> {
    console.log('req', req);


   // res.redirect('/courses')
 })

 module.exports = router;