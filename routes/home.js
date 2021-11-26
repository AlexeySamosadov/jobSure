const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.render('index', {
       title: 'JobSure - помощь с трудоустройством в IT',
       isLightMenu: false
    })
 })

module.exports = router;