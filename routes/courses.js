const {Router} = require('express');
const router = Router();
const Course = require('../models/course')


router.get('/', async (req, res) => {
   const courses = await Course.getAll()

   console.log('req', req.body);

    res.render('courses', {
       title: 'Курсы',
       courses,
    })
 })


module.exports = router;