const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.render('prices', {
       title: 'Цены',
       isLightMenu: true
    })
 })

module.exports = router;