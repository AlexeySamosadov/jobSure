const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.render('team', {
       title: 'Команда',
       isLightMenu: true
    })
 })

module.exports = router;