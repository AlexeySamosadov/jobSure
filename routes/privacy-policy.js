const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.render('privacy-policy', {
       title: 'Политика в отношении обработки персональных данных',
       isLightMenu: true
    })
 })

module.exports = router;