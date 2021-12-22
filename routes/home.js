const {Router} = require('express');
const router = Router();
const Article = require('../models/article');

router.get('/', async (req, res)=>{
   const articl  = await Article.find()
   const articles = JSON.parse(JSON.stringify(articl)) 

    res.render('index', {
       title: 'JobSure - помощь с трудоустройством в IT',
       isLightMenu: false,
       articles
    })
 })


module.exports = router;